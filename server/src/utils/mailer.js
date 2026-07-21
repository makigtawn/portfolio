import nodemailer from "nodemailer";

let transporter;

function getTransporter() {
  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) return null;

  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    });
  }
  return transporter;
}

export async function sendContactNotification(message) {
  const mailer = getTransporter();
  const { GMAIL_USER, CONTACT_TO_EMAIL } = process.env;
  if (!mailer) {
    console.warn("[mailer] GMAIL_USER/GMAIL_APP_PASSWORD not set, skipping notification email");
    return;
  }

  await mailer.sendMail({
    from: GMAIL_USER,
    to: CONTACT_TO_EMAIL || GMAIL_USER,
    replyTo: message.email,
    subject: `[Portfolio] New ${message.category} message from ${message.name}`,
    text: `From: ${message.name} <${message.email}>\nCategory: ${message.category}\n\n${message.message}`,
  });
}
