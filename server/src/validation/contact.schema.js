import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("A valid email is required"),
  category: z.enum(["General", "Collaboration", "Job Opportunity", "Other"]).optional().default("General"),
  message: z.string().min(1, "Message is required"),
});
