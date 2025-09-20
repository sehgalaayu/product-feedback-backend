import express, { Request, Response } from "express";
import { connectDb } from "./config/db";
import dotenv from "dotenv";
// Update the import path if your user routes are in './routes/userRoutes'
import userRoutes from "./routes/userRoutes";

//load env variables
dotenv.config();
const app = express();
const PORT = process.env.PORT;

//db initialisation
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "api working!!!!!!!!!!",
  });
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
