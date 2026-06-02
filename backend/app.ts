import express, { Request, Response } from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the SubTrack API!");
});

app.listen(PORT, () => {
  console.log(`SubTrack API is running on port http://localhost:${PORT}`);
});
