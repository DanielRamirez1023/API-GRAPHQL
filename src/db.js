import mongoose from "mongoose";
import process from "node:process";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected in port:${conn.connection.port}`);
  } catch (error) {
    console.error(`Hubo un error ${error}`);
  }
};
