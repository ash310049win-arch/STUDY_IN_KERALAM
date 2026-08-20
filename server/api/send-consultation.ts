import { defineEventHandler, readBody } from "h3";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const {
    name,
    phone,
    email,
    studyLevel,
    location,
    districts,
    fields,
    institutionType,
    entranceCoaching,
    hostelGuidance,
  } = body as {
    name: string;
    phone: string;
    email: string;
    studyLevel: string;
    location: string;
    districts: string[];
    fields: string[];
    institutionType: string;
    entranceCoaching: boolean;
    hostelGuidance: boolean;
  };

  if (!name || !phone || !email) {
    return { error: "Name, phone, and email are required.", status: 400 };
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

  const districtList = districts?.length ? districts.join(", ") : "Not specified";
  const fieldList = fields?.length ? fields.join(", ") : "Not specified";

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;color:#333;max-width:600px;margin:0 auto;">
      <div style="background:#4a3328;padding:24px 32px;border-radius:8px 8px 0 0;">
        <h1 style="color:#f5f0e8;font-size:20px;margin:0;">New Consultation Booking</h1>
        <p style="color:#c9a84c;font-size:13px;margin:4px 0 0;text-transform:uppercase;letter-spacing:0.1em;">Study in Keralam</p>
      </div>
      <div style="background:#faf8f4;padding:32px;border:1px solid rgba(0,0,0,0.08);border-top:none;border-radius:0 0 8px 8px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;width:180px;">Name</td><td style="padding:8px 0;">${name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Phone</td><td style="padding:8px 0;">${phone}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Email</td><td style="padding:8px 0;">${email}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Study Level</td><td style="padding:8px 0;">${studyLevel || "Not specified"}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Location</td><td style="padding:8px 0;">${location || "Not specified"}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Districts</td><td style="padding:8px 0;">${districtList}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Fields of Interest</td><td style="padding:8px 0;">${fieldList}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Institution Type</td><td style="padding:8px 0;">${institutionType || "No preference"}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Entrance Exam Coaching</td><td style="padding:8px 0;">${entranceCoaching ? "Yes" : "No"}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Hostel Guidance</td><td style="padding:8px 0;">${hostelGuidance ? "Yes" : "No"}</td></tr>
        </table>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Study in Keralam" <${smtpUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `New Consultation Booking — ${name}`,
      text: `New consultation booking from ${name}\n\nPhone: ${phone}\nEmail: ${email}\nStudy Level: ${studyLevel}\nLocation: ${location}\nDistricts: ${districtList}\nFields: ${fieldList}\nInstitution Type: ${institutionType}\nEntrance Coaching: ${entranceCoaching ? "Yes" : "No"}\nHostel Guidance: ${hostelGuidance ? "Yes" : "No"}`,
      html: htmlBody,
    });

    return { success: true };
  } catch (err) {
    console.error("Failed to send consultation email:", err);
    return { error: "Failed to send. Please try again or call us directly.", status: 500 };
  }
});
