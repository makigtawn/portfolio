import { fromNodeHeaders } from "better-auth/node";
import { getAuth } from "../lib/auth.js";
import { ApiError } from "../utils/ApiError.js";

export async function requireAdmin(req, res, next) {
  try {
    const session = await getAuth().api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!session) {
      throw new ApiError(401, "Not signed in");
    }

    if (session.user.email !== process.env.ADMIN_EMAIL) {
      throw new ApiError(403, "Not authorized");
    }

    req.session = session;
    next();
  } catch (err) {
    next(err instanceof ApiError ? err : new ApiError(401, "Not signed in"));
  }
}
