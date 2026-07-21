import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().optional().default(""),
  images: z.array(z.string()).optional().default([]),
  tags: z.array(z.string()).optional().default([]),
  techStack: z.array(z.string()).optional().default([]),
  category: z.string().optional().default(""),
  link: z.string().optional().default(""),
  github: z.string().optional().default(""),
  featured: z.boolean().optional().default(false),
  order: z.number().optional().default(0),
});

export const projectUpdateSchema = projectSchema.partial();
