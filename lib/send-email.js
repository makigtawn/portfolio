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
  const trimmedGmailUser = gmailUser?.trim();
  const normalizedGmailPass = gmailPass?.replace(/\s+/g, "");
  const trimmedRecipientEmail = recipientEmail?.trim() || DEFAULT_RECIPIENT_EMAIL;

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    throw new ContactError("Please fill in all fields.", 400);
  }

  if (!trimmedGmailUser || !normalizedGmailPass) {
    throw new ContactError(
      "Contact form is not configured yet. Add GMAIL_USER and GMAIL_APP_PASSWORD to your environment.",
      503,
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: trimmedGmailUser,
      pass: normalizedGmailPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${trimmedGmailUser}>`,
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
  } catch (error) {
    const connectionErrorCodes = new Set([
      "ECONNREFUSED",
      "ECONNECTION",
      "ENETUNREACH",
      "ESOCKET",
      "ETIMEDOUT",
    ]);

    if (connectionErrorCodes.has(error.code)) {
      throw new ContactError(
        `The email service could not be reached. Please email me directly at ${trimmedRecipientEmail}.`,
        502,
      );
    }

    throw new ContactError(
      `Could not send your message. Please email me directly at ${trimmedRecipientEmail}.`,
      502,
    );
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
