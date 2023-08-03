import express from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/api/auth-router.js";

dotenv.config();

import { router } from "./routes/api/contacts.js";

export const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/contacts", router);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  if (message.includes("Cast to ObjectId failed for value")) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.status(status).json({ message });
});
