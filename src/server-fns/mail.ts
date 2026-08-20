import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

function getSmtp() {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactEmail = process.env.CONTACT_EMAIL || "info@quilonconsultancy.com";
  if (!smtpUser || !smtpPass) {
    throw new Error("Email service not configured.");
  }
  return { smtpUser, smtpPass, contactEmail };
}

function createTransporter(smtpUser: string, smtpPass: string) {
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: smtpUser, pass: smtpPass },
  });
}

type ConsultationInput = {
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

export const sendConsultation = createServerFn({ method: "POST" })
  .validator((data: ConsultationInput) => data)
  .handler(async ({ data }) => {
    if (!data.name || !data.phone || !data.email) {
      throw new Error("Name, phone, and email are required.");
    }

    const { smtpUser, smtpPass, contactEmail } = getSmtp();
    const transporter = createTransporter(smtpUser, smtpPass);

    const districtList = data.districts?.length ? data.districts.join(", ") : "Not specified";
    const fieldList = data.fields?.length ? data.fields.join(", ") : "Not specified";

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;color:#333;max-width:600px;margin:0 auto;">
        <div style="background:#4a3328;padding:24px 32px;border-radius:8px 8px 0 0;">
          <h1 style="color:#f5f0e8;font-size:20px;margin:0;">New Consultation Booking</h1>
          <p style="color:#c9a84c;font-size:13px;margin:4px 0 0;text-transform:uppercase;letter-spacing:0.1em;">Study in Keralam</p>
        </div>
        <div style="background:#faf8f4;padding:32px;border:1px solid rgba(0,0,0,0.08);border-top:none;border-radius:0 0 8px 8px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;width:180px;">Name</td><td style="padding:8px 0;">${data.name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Phone</td><td style="padding:8px 0;">${data.phone}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Email</td><td style="padding:8px 0;">${data.email}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Study Level</td><td style="padding:8px 0;">${data.studyLevel || "Not specified"}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Location</td><td style="padding:8px 0;">${data.location || "Not specified"}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Districts</td><td style="padding:8px 0;">${districtList}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Fields of Interest</td><td style="padding:8px 0;">${fieldList}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Institution Type</td><td style="padding:8px 0;">${data.institutionType || "No preference"}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Entrance Exam Coaching</td><td style="padding:8px 0;">${data.entranceCoaching ? "Yes" : "No"}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Hostel Guidance</td><td style="padding:8px 0;">${data.hostelGuidance ? "Yes" : "No"}</td></tr>
          </table>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Study in Keralam" <${smtpUser}>`,
      to: contactEmail,
      replyTo: data.email,
      subject: `New Consultation Booking — ${data.name}`,
      text: `New consultation booking from ${data.name}\n\nPhone: ${data.phone}\nEmail: ${data.email}\nStudy Level: ${data.studyLevel}\nLocation: ${data.location}\nDistricts: ${districtList}\nFields: ${fieldList}\nInstitution Type: ${data.institutionType}\nEntrance Coaching: ${data.entranceCoaching ? "Yes" : "No"}\nHostel Guidance: ${data.hostelGuidance ? "Yes" : "No"}`,
      html: htmlBody,
    });

    return { success: true };
  });

type ContactInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const sendContact = createServerFn({ method: "POST" })
  .validator((data: ContactInput) => data)
  .handler(async ({ data }) => {
    if (!data.name || !data.email || !data.message) {
      throw new Error("Name, email, and message are required.");
    }

    const { smtpUser, smtpPass, contactEmail } = getSmtp();
    const transporter = createTransporter(smtpUser, smtpPass);

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;color:#333;max-width:600px;margin:0 auto;">
        <div style="background:#4a3328;padding:24px 32px;border-radius:8px 8px 0 0;">
          <h1 style="color:#f5f0e8;font-size:20px;margin:0;">New Enquiry</h1>
          <p style="color:#c9a84c;font-size:13px;margin:4px 0 0;text-transform:uppercase;letter-spacing:0.1em;">Study in Keralam — Contact Form</p>
        </div>
        <div style="background:#faf8f4;padding:32px;border:1px solid rgba(0,0,0,0.08);border-top:none;border-radius:0 0 8px 8px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;width:140px;">Name</td><td style="padding:8px 0;">${data.name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Email</td><td style="padding:8px 0;">${data.email}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;">Phone</td><td style="padding:8px 0;">${data.phone || "Not provided"}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;color:#4a3328;vertical-align:top;">Message</td><td style="padding:8px 0;white-space:pre-wrap;">${data.message}</td></tr>
          </table>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Study in Keralam" <${smtpUser}>`,
      to: contactEmail,
      replyTo: data.email,
      subject: `New Enquiry — ${data.name}`,
      text: `New enquiry from ${data.name}\n\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\n\nMessage:\n${data.message}`,
      html: htmlBody,
    });

    return { success: true };
  });
