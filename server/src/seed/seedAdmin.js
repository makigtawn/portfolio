import { getAuth } from "../lib/auth.js";
import mongoose from "mongoose";

export async function seedAdmin() {
  const users = mongoose.connection.getClient().db().collection("user");
  const existing = await users.countDocuments();
  if (existing > 0) {
    console.log("[seed:admin] a user already exists, skipping");
    return;
  }

  const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NAME } = process.env;
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.log("[seed:admin] ADMIN_EMAIL/ADMIN_PASSWORD not set, skipping");
    return;
  }

  await getAuth().api.signUpEmail({
    body: {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      name: ADMIN_NAME || "Admin",
    },
  });
  console.log(`[seed:admin] created admin user ${ADMIN_EMAIL}`);
  console.log(
    "[seed:admin] IMPORTANT: this is a one-time seed. Remove ADMIN_PASSWORD from server/.env now that the account exists.",
  );
}
