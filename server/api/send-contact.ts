import { defineEventHandler, readBody } from "h3";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, phone, message } = body as {
    name: string;
    email: string;
    phone: string;
    message: string;
  };

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required.", status: 400 };
  }

  const env = process.env as Record<string, string | undefined>;
  const smtpUser = env.SMTP_USER;
  const smtpPass = env.SMTP_PASS;
  const contactEmail = env.CONTACT_EMAIL || "quilonconsultancy@gmail.com";

  if (!smtpUser || !smtpPass) {
    return { error: "Email service not configured.", status: 500 };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: smtpUser, pass: smtpPass },
  });

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;color:#333;max-width:600px;margin:0 auto;">
      <div style="background:#4a3328;padding:24px 32px;border-radius:8px 8px 0 0;">
        <h1 style="color:#f5f0e8;font-size:20px;margin:0;">New Enquiry</h1>
        <p style="color:#c9a84c;font-size:13px;margin:4px 0 0;text-transform:uppercase;letter-spacing:0.1em;">Study in Keralam — Contact Form</p>
      </div>
      <div style="background:#faf8f4;padding:32px;border:1px solid rgba(0,0,0,0.08);border-top:none;border-radius:0 0 8px 8px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;width:140px;">Name</td><td style="padding:8px 0;">${name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Email</td><td style="padding:8px 0;">${email}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Phone</td><td style="padding:8px 0;">${phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;vertical-align:top;">Message</td><td style="padding:8px 0;white-space:pre-wrap;">${message}</td></tr>
        </table>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Study in Keralam" <${smtpUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `New Enquiry — ${name}`,
      text: `New enquiry from ${name}\n\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`,
      html: htmlBody,
    });

    return { success: true };
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return { error: "Failed to send. Please try again or call us directly.", status: 500 };
  }
});
