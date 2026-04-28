import nodemailer, { type Transporter } from "nodemailer";

let cached: Transporter | null = null;

function getTransporter(): Transporter {
  if (cached) return cached;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "Configuration SMTP manquante (SMTP_HOST, SMTP_USER, SMTP_PASS)."
    );
  }

  const tls: Record<string, unknown> = {};
  if (process.env.SMTP_TLS_SERVERNAME) {
    tls.servername = process.env.SMTP_TLS_SERVERNAME;
  }
  if (process.env.SMTP_TLS_REJECT_UNAUTHORIZED === "false") {
    tls.rejectUnauthorized = false;
  }

  cached = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    ...(Object.keys(tls).length > 0 ? { tls } : {}),
  });
  return cached;
}

export type MailAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

export async function sendMail(options: {
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  attachments?: MailAttachment[];
}) {
  const to = process.env.CONTACT_TO ?? "s3a-sarl@hotmail.fr";
  const from = process.env.CONTACT_FROM ?? `S3A Site <${to}>`;
  const transporter = getTransporter();
  await transporter.sendMail({
    from,
    to,
    subject: options.subject,
    html: options.html,
    text: options.text,
    replyTo: options.replyTo,
    attachments: options.attachments,
  });
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
