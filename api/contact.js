import { ContactError, sendPortfolioEmail } from "../lib/send-email.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await sendPortfolioEmail(req.body, {
      gmailUser: process.env.GMAIL_USER,
      gmailPass: process.env.GMAIL_APP_PASSWORD,
      recipientEmail: process.env.CONTACT_TO_EMAIL,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof ContactError) {
      console.error("[contact-api]", error.message);
      return res.status(error.status).json({ error: error.message });
    }

    console.error("[contact-api]", error);
    return res.status(500).json({ error: "Could not send your message." });
  }
}
