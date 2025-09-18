import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { string } from "zod";

interface User {
  username: string; //string is the correct primitive string type used in most typings. String refers to the String object, which has many additional methods.
  email: string;
  password: string;
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
    timestamps: true, // this will create updatedAt and createdAt fields automatically
  }
);

//mongoose pre hook middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error as Error); // The "as" keyword tells the TypeScript compiler: "Treat the variable error as the type Error, no matter what else the compiler thinks."
  }
});

userSchema.methods.checkPassword = async function (inputPwd: string) {
  return await bcrypt.compare(inputPwd, this.password);
};

const User = model<User>("User", userSchema);
export default User;
