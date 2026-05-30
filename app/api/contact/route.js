export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { ok: false, error: "RESEND_API_KEY not configured." },
      { status: 500 }
    );
  }

  // Parse multipart form data from the contact form
  const data = await request.formData();
  const name    = data.get("name")    || "";
  const company = data.get("company") || "";
  const email   = data.get("email")   || "";
  const phone   = data.get("phone")   || "";
  const message = data.get("message") || "";

  // Basic honeypot check (bot submitted the hidden field)
  if (data.get("_gotcha")) {
    return Response.json({ ok: true }); // silently swallow
  }

  const html = `
    <h2 style="margin:0 0 16px;font-family:sans-serif;">New quote request</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Name</td><td>${name}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Company</td><td>${company}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Phone</td><td>${phone || "—"}</td></tr>
    </table>
    <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb;" />
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;">${message}</p>
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
      subject: `Quote request — ${name} (${company})`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return Response.json({ ok: false, error: "Failed to send." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
