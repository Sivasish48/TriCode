import mongoose from "mongoose";
import { config } from "dotenv";
config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "tricode",
    });
    console.log("Connected successfully to DB");
  } catch (error) {
    console.log(`Error in connecting to DB : ${error}`);
  }
};