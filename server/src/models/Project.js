import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true, default: "" },
    image: { type: String, default: "" },
    images: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    techStack: { type: [String], default: [] },
    category: { type: String, default: "" },
    link: { type: String, default: "" },
    github: { type: String, default: "" },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Project = mongoose.model("Project", projectSchema);
