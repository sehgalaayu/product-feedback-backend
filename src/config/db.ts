import mongoose = require("mongoose");

export const connectDb = async () => {
  try {
    const mongoURL = process.env.MONGO_URL;
    if (!mongoURL) {
      throw new Error("MONGO_URL environment variable is not defined");
    }
    await mongoose.connect(mongoURL);
    console.log("MongoDB connection successful");
  } catch (error) {
    console.error("Mongodb connection successful");
  }
};
