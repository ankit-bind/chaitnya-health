import { Router } from "express";
import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { RegisterUserSchema, LoginUserSchema } from "../../shared/api";
import { prisma } from "../services/prisma";

const router = Router();

const JWT_COOKIE_NAME = "token";
const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret";
const JWT_EXPIRES_IN = "7d";

function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

function setAuthCookie(res: any, token: string) {
  res.cookie(JWT_COOKIE_NAME, token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/",
  });
}

// Register
router.post("/register", async (req, res) => {
  const parse = RegisterUserSchema.safeParse(req.body);
  if (!parse.success)
    return res.status(400).json({ error: parse.error.flatten() });
  const { email, password } = parse.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return res.status(409).json({ error: "Email already in use" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, password: hashed } });
  const token = signToken({ userId: user.id });
  setAuthCookie(res, token);
  res.json({ id: user.id, email: user.email });
});

// Login
router.post("/login", async (req, res) => {
  const parse = LoginUserSchema.safeParse(req.body);
  if (!parse.success)
    return res.status(400).json({ error: parse.error.flatten() });
  const { email, password } = parse.data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });

  const token = signToken({ userId: user.id });
  setAuthCookie(res, token);
  res.json({ id: user.id, email: user.email });
});

// Me
router.get("/me", async (req, res) => {
  try {
    const token = req.cookies?.[JWT_COOKIE_NAME];
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    const payload = jwt.verify(token, JWT_SECRET) as { userId: string };
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });
    if (!user) return res.status(401).json({ error: "Unauthorized" });
    res.json({ id: user.id, email: user.email });
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
});

// Logout
router.post("/logout", (_req, res) => {
  res.clearCookie(JWT_COOKIE_NAME, { path: "/" });
  res.json({ success: true });
});

export const handleAuthRoutes = router;
