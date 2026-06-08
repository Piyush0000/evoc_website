import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nodemailer needs the Node.js runtime (it uses net/tls), not the Edge runtime.
export const runtime = 'nodejs';
// Always handle at request time — never cache or prerender an application submission.
export const dynamic = 'force-dynamic';

type ApplicationPayload = {
  position?: string;
  fullName?: string;
  email?: string;
  github?: string;
  portfolio?: string;
  resume?: string;
  projects?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request: Request) {
  let body: ApplicationPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const position = (body.position || '').trim();
  const fullName = (body.fullName || '').trim();
  const email = (body.email || '').trim();
  const github = (body.github || '').trim();
  const portfolio = (body.portfolio || '').trim();
  const resume = (body.resume || '').trim();
  const projects = (body.projects || '').trim();

  // Required fields — keep in sync with the form's `required` inputs.
  if (!fullName || !email || !github || !portfolio || !resume || !projects) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
  }

  // Basic email sanity check.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  // Applications land here; defaults to the requested inbox if not overridden.
  const to = process.env.APPLICATIONS_TO || 'Sociodesk.help@gmail.com';

  if (!user || !pass) {
    console.error('[apply] Missing GMAIL_USER / GMAIL_APP_PASSWORD environment variables.');
    return NextResponse.json(
      { error: 'Email service is not configured. Please try again later.' },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  const roleLabel = position || 'General Application';

  const rows: [string, string][] = [
    ['Position', roleLabel],
    ['Full name', fullName],
    ['Email', email],
    ['GitHub', github],
    ['Portfolio', portfolio],
    ['Resume', resume],
    ['Next.js project links', projects],
  ];

  const textBody = rows.map(([label, value]) => `${label}: ${value}`).join('\n');

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#6b7280;border-bottom:1px solid #eef0f3;white-space:nowrap;vertical-align:top;">${escapeHtml(
            label
          )}</td>
          <td style="padding:10px 16px;font-size:14px;color:#111827;border-bottom:1px solid #eef0f3;word-break:break-word;">${escapeHtml(
            value
          )}</td>
        </tr>`
    )
    .join('');

  const htmlBody = `
    <div style="background:#f4f5f7;padding:32px 0;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
        <div style="background:#2563eb;padding:24px 28px;">
          <p style="margin:0;color:#ffffff;font-size:18px;font-weight:700;">New Application — ${escapeHtml(
            roleLabel
          )}</p>
          <p style="margin:6px 0 0;color:#dbeafe;font-size:13px;">EVOC Labs · Careers</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">${htmlRows}</table>
        <div style="padding:18px 28px;background:#fafbfc;border-top:1px solid #eef0f3;">
          <p style="margin:0;color:#6b7280;font-size:12px;">Reply to this email to respond directly to ${escapeHtml(
            fullName
          )}.</p>
        </div>
      </div>
    </div>`;

  try {
    await transporter.sendMail({
      from: `EVOC Labs Careers <${user}>`,
      to,
      replyTo: `${fullName} <${email}>`,
      subject: `New Application: ${roleLabel} — ${fullName}`,
      text: textBody,
      html: htmlBody,
    });
  } catch (err) {
    console.error('[apply] Failed to send application email:', err);
    return NextResponse.json(
      { error: 'Could not send your application right now. Please try again later.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
