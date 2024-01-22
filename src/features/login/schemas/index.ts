import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(6, { message: "invalid email" }),
  password: z.string().min(6, { message: "min 6 caracteres" }),
});
