import z from "zod";

export const createUserSchema = z.object({
  username: z.string().min(2, "Username must be atleast 2 characters."),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(4, "Password must be atleast 4 characters."),
});

export const loginUserSchema = z.object({
  email: z.string().email("Please enter valid email"),
  password: z.string().min(1, "Password is required"),
});
