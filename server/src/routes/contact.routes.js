import { Router } from "express";
import rateLimit from "express-rate-limit";
import {
  createMessage,
  listMessages,
  updateMessage,
  deleteMessage,
} from "../controllers/contact.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";
import { validate } from "../middleware/validate.js";
import { contactMessageSchema } from "../validation/contact.schema.js";

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many messages sent. Please try again later." },
});

const router = Router();

router.post("/", contactLimiter, validate(contactMessageSchema), createMessage);
router.get("/", requireAdmin, listMessages);
router.patch("/:id", requireAdmin, updateMessage);
router.delete("/:id", requireAdmin, deleteMessage);

export default router;
