// import mongoose = require("mongoose");

// export const connectDb = async () => {
//   try {
//     // In your code, you were getting the database URL from the environment variable process.env.MONGO_URL.
//     const mongoURL = process.env.MONGO_URL;
//     // But TypeScript says: "Hey, this variable might be empty or undefined,
//     // but the mongoose.connect function needs a real string." So, before using mongoURL, you should check if it has a value. If it doesn't, show an error message.
//     if (!mongoURL) {
//       throw new Error("MONGO_URL environment variable is not defined");
//     }
//     await mongoose.connect(mongoURL);
//     console.log("MongoDB connection successful");
//   } catch (error) {
//     console.error("Mongodb connection successful");
//   }
// };
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const mongoURL = String(process.env.MONGO_URL);
    if (!mongoURL) {
      console.log("mogno url is undefined");
    }
    await mongoose.connect(mongoURL);
    console.log(`Mongo connection successful`);
  } catch (error) {
    console.error("mongo connection unsuccessful");
  }
};
