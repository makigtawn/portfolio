import mongoose from "mongoose";

const pageViewSchema = new mongoose.Schema(
  {
    path: { type: String, required: true, maxlength: 200 },
    referrer: { type: String, default: "", maxlength: 500 },
    device: { type: String, enum: ["mobile", "tablet", "desktop"], default: "desktop" },
  },
  { timestamps: true },
);

pageViewSchema.index({ createdAt: 1 });

export const PageView = mongoose.model("PageView", pageViewSchema);
