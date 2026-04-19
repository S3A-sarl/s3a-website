import { NextResponse } from "next/server";
import { z } from "zod";
import { sendMail, escapeHtml } from "@/lib/mailer";
import { rateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const maxDuration = 30;

const MAX_CV_BYTES = 5 * 1024 * 1024;

const schema = z.object({
  nom: z.string().min(2).max(120),
  email: z.string().email(),
  tel: z.string().max(40).optional().default(""),
  poste: z.string().max(160).optional().default(""),
  message: z.string().min(10).max(4000),
  website: z.string().max(0).optional().default(""),
});

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous";

  const limit = rateLimit(`recrutement:${ip}`);
  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, error: "Trop de requêtes, réessayez plus tard." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter ?? 60) } }
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 }
    );
  }

  const raw = {
    nom: form.get("nom"),
    email: form.get("email"),
    tel: form.get("tel") ?? "",
    poste: form.get("poste") ?? "",
    message: form.get("message"),
    website: form.get("website") ?? "",
  };

  let data: z.infer<typeof schema>;
  try {
    data = schema.parse(raw);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Formulaire invalide." },
      { status: 400 }
    );
  }

  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const cv = form.get("cv");
  let attachment: { filename: string; content: Buffer; contentType?: string } | undefined;
  if (cv instanceof File && cv.size > 0) {
    if (cv.size > MAX_CV_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Le CV dépasse 5 Mo." },
        { status: 400 }
      );
    }
    if (cv.type !== "application/pdf") {
      return NextResponse.json(
        { ok: false, error: "Le CV doit être au format PDF." },
        { status: 400 }
      );
    }
    const buf = Buffer.from(await cv.arrayBuffer());
    attachment = {
      filename: cv.name || "cv.pdf",
      content: buf,
      contentType: "application/pdf",
    };
  }

  const rows: [string, string][] = [
    ["Nom", data.nom],
    ["Email", data.email],
    ["Téléphone", data.tel || "—"],
    ["Poste souhaité", data.poste || "—"],
    ["CV joint", attachment ? attachment.filename : "Aucun"],
  ];

  const html = `
    <h2 style="margin:0 0 16px;font-family:Arial,sans-serif;color:#2b2d33">Nouvelle candidature</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${rows
        .map(
          ([k, v]) => `
        <tr>
          <td style="padding:6px 12px 6px 0;color:#4a4d55">${escapeHtml(k)}</td>
          <td style="padding:6px 0;color:#2b2d33"><strong>${escapeHtml(v)}</strong></td>
        </tr>`
        )
        .join("")}
    </table>
    <h3 style="margin:20px 0 8px;font-family:Arial,sans-serif;color:#2b2d33">Message</h3>
    <p style="white-space:pre-wrap;font-family:Arial,sans-serif;font-size:14px;color:#2b2d33">
      ${escapeHtml(data.message)}
    </p>
  `;

  try {
    await sendMail({
      subject: `[S3A] Candidature — ${data.nom}${
        data.poste ? ` (${data.poste})` : ""
      }`,
      html,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${data.message}`,
      replyTo: data.email,
      attachments: attachment ? [attachment] : undefined,
    });
  } catch (err) {
    console.error("sendMail failed", err);
    return NextResponse.json(
      { ok: false, error: "Envoi impossible. Merci de réessayer." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
