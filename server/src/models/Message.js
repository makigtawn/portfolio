import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    category: {
      type: String,
      enum: ["General", "Collaboration", "Job Opportunity", "Other"],
      default: "General",
    },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["unread", "read", "archived"],
      default: "unread",
    },
  },
  { timestamps: true },
);

export const Message = mongoose.model("Message", messageSchema);
