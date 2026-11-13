import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type DemoPayload = {
  name?: string;
  phoneNumber?: string;
  hasGst?: string;
  category?: string;
  onlineSellingChannel?: string;
  revenueRange?: string;
  productLink?: string;
  preferredDateTime?: string;
};

const escapeHtml = (value: string = '') =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request: Request) {
  let body: DemoPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = (body.name || '').trim();
  const phoneNumber = (body.phoneNumber || '').trim();
  const hasGst = (body.hasGst || '').trim();
  const category = (body.category || '').trim();
  const onlineSellingChannel = (body.onlineSellingChannel || '').trim();
  const revenueRange = (body.revenueRange || '').trim();
  const productLink = (body.productLink || '').trim();
  const preferredDateTime = (body.preferredDateTime || '').trim();

  // Basic validation
  if (!name || !phoneNumber) {
    return NextResponse.json(
      { error: 'Name and phone number are required.' },
      { status: 400 }
    );
  }

  // Clean phone number
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  if (cleanPhone.length < 10) {
    return NextResponse.json(
      { error: 'Please provide a valid 10-digit phone number.' },
      { status: 400 }
    );
  }

  const submissionDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  // 1. Send Email Notification via Gmail SMTP
  let emailSent = false;
  let emailError: string | null = null;
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to =
    process.env.DEMO_BOOKINGS_TO ||
    process.env.APPLICATIONS_TO ||
    user ||
    'Sociodesk.help@gmail.com';

  if (user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user, pass },
      });

      const rows: [string, string][] = [
        ['Lead Name', name],
        ['Phone Number', `+91 ${cleanPhone.slice(-10)}`],
        ['Has GST?', hasGst || 'Not specified'],
        ['Product Category', category || 'Not specified'],
        ['Online Selling Channel', onlineSellingChannel || 'Not specified'],
        ['Current Monthly Revenue', revenueRange || 'Not specified'],
      ];

      if (productLink) {
        rows.push(['Product / Website Link', productLink]);
      }

      if (preferredDateTime) {
        rows.push(['Preferred Date & Time', preferredDateTime]);
      }

      rows.push(['Submitted At (IST)', submissionDate]);

      const textBody = rows.map(([label, val]) => `${label}: ${val}`).join('\n');

      const htmlRows = rows
        .map(
          ([label, val]) => `
            <tr>
              <td style="padding: 12px 16px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; border-bottom: 1px solid #e2e8f0; width: 35%; background: #f8fafc;">
                ${escapeHtml(label)}
              </td>
              <td style="padding: 12px 16px; font-size: 14px; font-weight: 500; color: #0f172a; border-bottom: 1px solid #e2e8f0;">
                ${label.includes('Link') ? `<a href="${escapeHtml(val)}" target="_blank" style="color:#183EEB;text-decoration:underline;">${escapeHtml(val)}</a>` : escapeHtml(val)}
              </td>
            </tr>`
        )
        .join('');

      const htmlBody = `
        <div style="background-color: #0b0f19; padding: 40px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.25);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #0d1b3e 0%, #183EEB 100%); padding: 32px 28px; text-align: left;">
              <span style="display: inline-block; padding: 4px 10px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); border-radius: 9999px; color: #ffffff; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
                New Website Lead
              </span>
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">
                Demo Booking Request
              </h1>
              <p style="margin: 6px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">
                A new prospect has requested a demo on Evoke Labs.
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 28px;">
              <table style="width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                <tbody>
                  ${htmlRows}
                </tbody>
              </table>

              <!-- Quick Action Button -->
              <div style="margin-top: 24px; text-align: center;">
                <a href="https://wa.me/91${cleanPhone.slice(-10)}?text=${encodeURIComponent(`Hi ${name}, thank you for booking a demo with Evoke Labs! We would love to walk you through our AI-powered e-commerce ecosystem.`)}" 
                   style="display: inline-block; background: #25D366; color: #ffffff; padding: 12px 24px; border-radius: 10px; font-weight: 700; font-size: 14px; text-decoration: none; margin-right: 8px;">
                  💬 Chat on WhatsApp
                </a>
                <a href="tel:+91${cleanPhone.slice(-10)}" 
                   style="display: inline-block; background: #183EEB; color: #ffffff; padding: 12px 24px; border-radius: 10px; font-weight: 700; font-size: 14px; text-decoration: none;">
                  📞 Call Prospect
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #f8fafc; padding: 20px 28px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                Sent automatically by Evoke Labs website lead dispatcher.
              </p>
            </div>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Evoke Labs Leads" <${user}>`,
        to,
        replyTo: user,
        subject: `🚀 New Demo Booking: ${name} (+91 ${cleanPhone.slice(-10)}) - Evoke Labs`,
        text: textBody,
        html: htmlBody,
      });
      emailSent = true;
    } catch (err: any) {
      console.error('[demo-lead] Failed to send email via nodemailer:', err);
      emailError = err?.message || 'Failed to dispatch email';
    }
  } else {
    console.warn('[demo-lead] GMAIL_USER or GMAIL_APP_PASSWORD missing in env.');
  }

  // 2. Dispatch to Orbit Admin CRM (Backend)
  let crmSent = false;
  let crmError: string | null = null;
  const rawApiBase = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:5000';
  const apiBase = rawApiBase.replace(/\/+$/, '');

  const crmPayload = {
    name,
    phoneNumber: `+91 ${cleanPhone.slice(-10)}`,
    phone: cleanPhone.slice(-10),
    category: category || undefined,
    revenueRange: revenueRange || undefined,
    platform: onlineSellingChannel || undefined,
    website: productLink || undefined,
    formType: 'book-demo',
    status: 'LEADS',
    metadata: {
      hasGst: hasGst || undefined,
      onlineSellingChannel: onlineSellingChannel || undefined,
      category: category || undefined,
      revenueRange: revenueRange || undefined,
      productLink: productLink || undefined,
      preferredDateTime: preferredDateTime || undefined,
      source: 'Evoke Labs Website (Book a Demo)',
      submittedAt: submissionDate,
    },
  };

  try {
    const crmRes = await fetch(`${apiBase}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crmPayload),
    });

    if (crmRes.ok || crmRes.status === 201 || crmRes.status === 200) {
      crmSent = true;
    } else if (crmRes.status === 404) {
      const retryRes = await fetch(`${apiBase}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(crmPayload),
      });
      if (retryRes.ok || retryRes.status === 201 || retryRes.status === 200) {
        crmSent = true;
      }
    } else if (crmRes.status === 409) {
      crmSent = true;
    } else {
      const errText = await crmRes.text().catch(() => '');
      crmError = `CRM returned status ${crmRes.status}: ${errText}`;
      console.warn('[demo-lead] CRM error:', crmError);
    }
  } catch (err: any) {
    crmError = err?.message || 'Network error connecting to Orbit Admin CRM';
    console.warn('[demo-lead] Could not connect to CRM at', apiBase, err?.message);
  }

  return NextResponse.json(
    {
      success: true,
      emailSent,
      crmSent,
      message: 'Demo booking received successfully.',
      ...(emailError ? { emailNotice: emailError } : {}),
      ...(crmError ? { crmNotice: crmError } : {}),
    },
    { status: 200 }
  );
}
