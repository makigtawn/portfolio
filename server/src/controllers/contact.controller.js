import { Message } from "../models/Message.js";
import { sendContactNotification } from "../utils/mailer.js";
import { ApiError } from "../utils/ApiError.js";

export async function createMessage(req, res, next) {
  try {
    const { name, email, category, message } = req.body;

    const doc = await Message.create({ name, email, category, message });

    try {
      await sendContactNotification(doc);
    } catch (mailErr) {
      console.error("[contact] notification email failed:", mailErr.message);
    }

    res.status(201).json({ success: true });
  } catch (err) {
    next(err);
  }
}

export async function listMessages(req, res, next) {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    const messages = await Message.find(filter).sort({ createdAt: -1 });
    res.json({ messages });
  } catch (err) {
    next(err);
  }
}

export async function updateMessage(req, res, next) {
  try {
    const { status } = req.body;
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true },
    );
    if (!message) throw new ApiError(404, "Message not found");
    res.json({ message });
  } catch (err) {
    next(err);
  }
}

export async function deleteMessage(req, res, next) {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) throw new ApiError(404, "Message not found");
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}
