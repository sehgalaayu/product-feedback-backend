import express, { Request, Response } from "express";
import { connectDb } from "./config/db";
import dotenv from "dotenv";
//load env variables
dotenv.config();
const app = express();
const PORT = process.env.PORT;

//db initialisation
connectDb();

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "api working!!!!!!!!!!",
  });
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
