import mongoose from "mongoose";

let isConnected = false;

export const dbConnection = async () => {
  if (isConnected) return;
  
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "HospitalManagement",
      bufferCommands: false,
    });
    isConnected = true;
    console.log("Connected to database!");
  } catch (err) {
    console.log("Some error occured while connecting to database:", err);
  }
};