import { Request, Response, NextFunction } from "express";
import {
  createUserSchema,
  loginUserSchema,
} from "../validations/userValidation";

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = req.path.includes("login")
      ? loginUserSchema
      : createUserSchema;
    schema.parse(req.body);
    next();
  } catch (error) {
    console.log("Validatiion error", error);
    res.status(400).json({
      message: "invalid user data",
    });
  }
};
