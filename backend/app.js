import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the SubTrack API!");
});

app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`SubTrack API is running on port http://localhost:${PORT}`);
});
