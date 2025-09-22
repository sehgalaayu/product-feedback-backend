import { Request, Response } from "express";
import Feedback from "../models/Feedback";

export const feedbackController = {
  async create(req: Request, res: Response) {
    try {
      const { title, category, description } = req.body;
      const userId = (req as any).user?.userId;
      console.log("Extracted data:", { title, description, category, userId });

      const feedback = new Feedback({
        title,
        description,
        category,
        author: userId,
      });
      await feedback.save();
      res.status(201).json({
        message: "Feedback Created",
      });
    } catch (error) {
      console.error("Error while Creating Feedback", error);
      res.status(500).json("Error while saving feedback");
    }
  },
};
