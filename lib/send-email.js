import nodemailer from "nodemailer";

const DEFAULT_RECIPIENT_EMAIL = "meklitgirmaw@gmail.com";

export class ContactError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = "ContactError";
    this.status = status;
  }
}

export async function sendPortfolioEmail(
  { name, email, message },
  { gmailUser, gmailPass, recipientEmail = DEFAULT_RECIPIENT_EMAIL },
) {
  const trimmedName = name?.trim();
  const trimmedEmail = email?.trim();
  const trimmedMessage = message?.trim();
  const trimmedRecipientEmail = recipientEmail?.trim() || DEFAULT_RECIPIENT_EMAIL;

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    throw new ContactError("Please fill in all fields.", 400);
  }

  if (!gmailUser || !gmailPass) {
    throw new ContactError(
      "Contact form is not configured yet. Add GMAIL_USER and GMAIL_APP_PASSWORD to your environment.",
      503,
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: trimmedRecipientEmail,
      replyTo: trimmedEmail,
      subject: `Portfolio contact from ${trimmedName}`,
      text: [
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        "",
        trimmedMessage,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
        <hr />
        <p>${escapeHtml(trimmedMessage).replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true };
  } catch {
    throw new ContactError("Could not send your message. Please try again.", 502);
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
