import "dotenv/config";
import { connectDB } from "../config/db.js";
import { seedAdmin } from "./seedAdmin.js";
import { seedProjects } from "./seedProjects.js";
import { seedContent } from "./seedContent.js";
import mongoose from "mongoose";

async function run() {
  await connectDB(process.env.MONGODB_URI);
  await seedAdmin();
  await seedProjects();
  await seedContent();
  await mongoose.disconnect();
}

run()
  .then(() => {
    console.log("[seed] done");
    process.exit(0);
  })
  .catch((err) => {
    console.error("[seed] failed:", err);
    process.exit(1);
  });
