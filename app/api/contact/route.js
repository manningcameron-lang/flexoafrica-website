// app/api/contact/route.js
// Contact form -> Resend -> sales@flexoafrica.com
// Safety: HTML-escaped, length-capped, email-validated.

export const runtime = "nodejs";

const MAX = {
  name: 200,
  company: 200,
  email: 200,
  phone: 40,
  message: 5000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * HTML-escape untrusted user input before interpolating into an email body.
 * Prevents a malicious submitter from injecting HTML/scripts into sales@ inbox.
 */
function esc(v) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cap(v, limit) {
  const s = String(v ?? "").trim();
  return s.length > limit ? s.slice(0, limit) : s;
}

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { ok: false, error: "RESEND_API_KEY not configured." },
      { status: 500 }
    );
  }

  let data;
  try {
    data = await request.formData();
  } catch {
    return Response.json({ ok: false, error: "Bad form data." }, { status: 400 });
  }

  // Basic honeypot check (bot submitted the hidden field)
  if (data.get("_gotcha")) {
    return Response.json({ ok: true }); // silently swallow
  }

  // Length-cap every field so someone can't POST a 10 MB message.
  const name    = cap(data.get("name"),    MAX.name);
  const company = cap(data.get("company"), MAX.company);
  const email   = cap(data.get("email"),   MAX.email);
  const phone   = cap(data.get("phone"),   MAX.phone);
  const message = cap(data.get("message"), MAX.message);

  // Minimal validation.
  if (!name || !company || !email || !message) {
    return Response.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { ok: false, error: "Invalid email address." },
      { status: 400 }
    );
  }

  // Build HTML with every user field escaped.
  const html = `
    <h2 style="margin:0 0 16px;font-family:sans-serif;">New quote request</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Name</td><td>${esc(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Company</td><td>${esc(company)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Phone</td><td>${phone ? esc(phone) : "&mdash;"}</td></tr>
    </table>
    <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb;" />
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;">${esc(message)}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Flexo Africa Website <noreply@flexoafrica.com>",
      to:   ["sales@flexoafrica.com"],
      reply_to: email,
      subject: `Quote request from ${name} (${company})`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    // Log for Vercel logs; do NOT leak details to the client.
    console.error("Resend error:", err);
    return Response.json({ ok: false, error: "Failed to send." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
