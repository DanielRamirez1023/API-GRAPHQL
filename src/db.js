import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB connected in port:${conn.connection.port}`);
  } catch (error) {
    console.error(`Hubo un error ${error}`);
  }
};
