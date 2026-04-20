import { z } from "zod";

// Think of this like a DTO class in NestJS:
// @IsEmail(), @MinLength(6) — but runs in the browser.
//
// safeParse() returns { success, data, error } — no throw.
// Like a try/catch built into the validator.

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

export type LoginFormValues = z.infer<typeof loginSchema>;
