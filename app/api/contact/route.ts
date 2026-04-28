import { NextResponse } from "next/server";
import { z } from "zod";
import { sendMail, escapeHtml } from "@/lib/mailer";
import { rateLimit } from "@/lib/rateLimit";
import { serviceSlugs } from "@/lib/services";
import { formatZodError } from "@/lib/formError";

export const runtime = "nodejs";

const schema = z.object({
  nom: z.string().min(2).max(120),
  societe: z.string().max(160).optional().default(""),
  email: z.string().email(),
  tel: z.string().max(40).optional().default(""),
  service: z.enum(["", ...serviceSlugs] as [string, ...string[]]).optional().default(""),
  message: z.string().min(10).max(4000),
  website: z.string().max(0).optional().default(""),
});

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous";

  const limit = rateLimit(`contact:${ip}`);
  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, error: "Trop de requêtes, réessayez plus tard." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter ?? 60) } }
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 }
    );
  }

  const result = schema.safeParse(json);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, error: formatZodError(result.error) },
      { status: 400 }
    );
  }
  const data = result.data;

  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const rows: [string, string][] = [
    ["Nom", data.nom],
    ["Société", data.societe || "—"],
    ["Email", data.email],
    ["Téléphone", data.tel || "—"],
    ["Service concerné", data.service || "—"],
  ];

  const html = `
    <h2 style="margin:0 0 16px;font-family:Arial,sans-serif;color:#2b2d33">Nouvelle demande de devis</h2>
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
      subject: `[S3A] Demande de devis — ${data.nom}`,
      html,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${data.message}`,
      replyTo: data.email,
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
