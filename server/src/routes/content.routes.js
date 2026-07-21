import { Router } from "express";
import { getContent, updateHero, updateAbout, updateSkills } from "../controllers/content.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.get("/", getContent);
router.put("/hero", requireAdmin, updateHero);
router.put("/about", requireAdmin, updateAbout);
router.put("/skills", requireAdmin, updateSkills);

export default router;
