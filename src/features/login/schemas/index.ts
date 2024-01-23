import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(6, { message: "invalid email" }),
  password: z.string().min(6, { message: "min 6 characters" }),
});

export const registerSchema = z.object({
  name: z.string().min(3, { message: "min 3 characters" }),
  email: z.string().min(6, { message: "min 6" }),
  password: z.string().min(6, { message: "min 6 characters" }),
});
