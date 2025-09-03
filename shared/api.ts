/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

// Shared Zod schemas and types
import { z } from "zod";

// USER AUTHENTICATION
export const RegisterUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;

export const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export type LoginUserInput = z.infer<typeof LoginUserSchema>;

// POSTS
export const CreatePostSchema = z.object({
  title: z.string().min(1),
  content: z.string().optional(),
});
export type CreatePostInput = z.infer<typeof CreatePostSchema>;
