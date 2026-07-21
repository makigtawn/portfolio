import { Router } from "express";
import multer from "multer";
import { uploadImage } from "../controllers/uploads.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

const router = Router();

router.post("/", requireAdmin, upload.single("file"), uploadImage);

export default router;
