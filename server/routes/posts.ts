import { Router } from "express";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { CreatePostSchema } from "../../shared/api";
import { prisma } from "../services/prisma";

const router = Router();
const JWT_COOKIE_NAME = "token";
const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret";

function authUserId(req: any): string | null {
  try {
    const token = req.cookies?.[JWT_COOKIE_NAME];
    if (!token) return null;
    const payload = jwt.verify(token, JWT_SECRET) as { userId: string };
    return payload.userId;
  } catch {
    return null;
  }
}

// Create
router.post("/", async (req, res) => {
  const userId = authUserId(req);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });
  const parse = CreatePostSchema.safeParse(req.body);
  if (!parse.success)
    return res.status(400).json({ error: parse.error.flatten() });
  const { title, content } = parse.data;
  const post = await prisma.post.create({
    data: { title, content, authorId: userId },
  });
  res.json(post);
});

// Read all for user
router.get("/", async (req, res) => {
  const userId = authUserId(req);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });
  const posts = await prisma.post.findMany({ where: { authorId: userId } });
  res.json(posts);
});

// Read one
router.get("/:id", async (req, res) => {
  const userId = authUserId(req);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });
  const { id } = req.params;
  const post = await prisma.post.findFirst({ where: { id, authorId: userId } });
  if (!post) return res.status(404).json({ error: "Not found" });
  res.json(post);
});

// Update
router.put("/:id", async (req, res) => {
  const userId = authUserId(req);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });
  const { id } = req.params;
  const parse = CreatePostSchema.partial().safeParse(req.body);
  if (!parse.success)
    return res.status(400).json({ error: parse.error.flatten() });
  const found = await prisma.post.findFirst({
    where: { id, authorId: userId },
  });
  if (!found) return res.status(404).json({ error: "Not found" });
  const post = await prisma.post.update({ where: { id }, data: parse.data });
  res.json(post);
});

// Delete
router.delete("/:id", async (req, res) => {
  const userId = authUserId(req);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });
  const { id } = req.params;
  const found = await prisma.post.findFirst({
    where: { id, authorId: userId },
  });
  if (!found) return res.status(404).json({ error: "Not found" });
  await prisma.post.delete({ where: { id } });
  res.json({ success: true });
});

export const handlePostRoutes = router;
