import mongoose from "mongoose";

const logEntrySchema = new mongoose.Schema(
  {
    time: { type: String, required: true },
    text: { type: String, required: true },
  },
  { _id: false },
);

const siteContentSchema = new mongoose.Schema({
  hero: {
    greeting: { type: String, default: "$ whoami" },
    name: { type: String, default: "" },
    title: { type: String, default: "" },
    tagline: { type: String, default: "" },
    resumeUrl: { type: String, default: "" },
  },
  about: {
    heading: { type: String, default: "" },
    bodyText: { type: String, default: "" },
    logs: { type: [logEntrySchema], default: [] },
  },
});

export const SiteContent = mongoose.model("SiteContent", siteContentSchema);
