import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleAuthRoutes } from "./routes/auth";
import { handlePostRoutes } from "./routes/posts";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Auth & Posts
  app.use("/api/auth", handleAuthRoutes);
  app.use("/api/posts", handlePostRoutes);

  return app;
}
