import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

interface User {
  username: String;
  email: String;
  password: String;
}

const userSchema = new Schema<User>();
