import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "Username must be atleast 2 charecters")
  .max(20, "Username must be no more than 20 charecters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must be alphanumeric with underscores");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 charecters" }),
});

