import { Router } from "express";
import {
  listProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projects.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";
import { validate } from "../middleware/validate.js";
import { projectSchema, projectUpdateSchema } from "../validation/project.schema.js";

const router = Router();

router.get("/", listProjects);
router.get("/:id", getProject);
router.post("/", requireAdmin, validate(projectSchema), createProject);
router.put("/:id", requireAdmin, validate(projectUpdateSchema), updateProject);
router.delete("/:id", requireAdmin, deleteProject);

export default router;
