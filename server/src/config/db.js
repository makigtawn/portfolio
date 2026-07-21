import mongoose from "mongoose";

export async function connectDB(uri) {
  mongoose.connection.on("error", (err) => {
    console.error("[mongo] connection error:", err.message);
  });

  await mongoose.connect(uri);
  console.log("[mongo] connected");
}
