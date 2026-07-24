import { Router } from "express";
import { getPageviewHistory } from "../controllers/analytics.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.get("/pageviews", requireAdmin, getPageviewHistory);

export default router;
