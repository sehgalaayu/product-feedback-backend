import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { string } from "zod";

interface User {
  username: String;
  email: String;
  password: String;
}

const userSchema = new Schema<User>(
  {
    username: {
      required: true,
      unique: true,
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
