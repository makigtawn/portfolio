import { Project } from "../models/Project.js";
import { ApiError } from "../utils/ApiError.js";

export async function listProjects(req, res, next) {
  try {
    const filter = {};
    if (req.query.featured === "true") filter.featured = true;
    const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 });
    res.json({ projects });
  } catch (err) {
    next(err);
  }
}

export async function getProject(req, res, next) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) throw new ApiError(404, "Project not found");
    res.json({ project });
  } catch (err) {
    next(err);
  }
}

export async function createProject(req, res, next) {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ project });
  } catch (err) {
    next(err);
  }
}

export async function updateProject(req, res, next) {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) throw new ApiError(404, "Project not found");
    res.json({ project });
  } catch (err) {
    next(err);
  }
}

export async function deleteProject(req, res, next) {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) throw new ApiError(404, "Project not found");
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}
