import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";

export const userController = {
  async register(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      //create user //pwd hashing is done my User model
      const newUser = new User({ username, email, password });
      await newUser.save();

      const token = jwt.sign({ userId: newUser._id }, "aayu-key", {
        expiresIn: "24h",
      });
      res.status(201).json({ message: "User Created Sucessfully", token });
    } catch (error) {
      console.error("Regiteration Error", error);
      res.status(500).json({ message: "server error" });
    }
  },
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !(await (user as any).checkPassword(password))) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      //Create Token
      const token = jwt.sign({ userId: user._id }, "aayu-key", {
        expiresIn: "24h",
      });
      res.json({ message: "Login Sucessful" });
    } catch (error) {
      console.error("Login failed", error);
      res.status(400).json({ message: "Server Error" });
    }
  },
};
