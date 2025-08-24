import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// path to React app (Vite default)
const clientDir = path.join(__dirname, "../client/dist");

// serve static assets
app.use(express.static(clientDir));

// put API routes BEFORE the SPA fallback
// app.get("/api/health", (_req, res) => res.json({ ok: true }));

// SPA fallback: send index.html for any non-API route
app.use((req, res, next) => {
  // let real API routes fall through if you add them later
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(clientDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
