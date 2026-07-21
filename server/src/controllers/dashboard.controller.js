import { Project } from "../models/Project.js";
import { Message } from "../models/Message.js";

export async function getStats(req, res, next) {
  try {
    const [projects, totalMessages, unreadMessages] = await Promise.all([
      Project.countDocuments(),
      Message.countDocuments(),
      Message.countDocuments({ status: "unread" }),
    ]);

    res.json({
      projects,
      messages: { total: totalMessages, unread: unreadMessages },
    });
  } catch (err) {
    next(err);
  }
}
