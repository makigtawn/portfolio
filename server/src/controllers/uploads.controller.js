import { uploadBuffer } from "../lib/cloudinary.js";
import { ApiError } from "../utils/ApiError.js";

export async function uploadImage(req, res, next) {
  try {
    if (!req.file) throw new ApiError(400, "No file uploaded");
    const result = await uploadBuffer(req.file.buffer);
    res.status(201).json({ url: result.secure_url });
  } catch (err) {
    next(err);
  }
}
