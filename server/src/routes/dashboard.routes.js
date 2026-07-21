import { Router } from "express";
import { getStats } from "../controllers/dashboard.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.get("/stats", requireAdmin, getStats);

export default router;
