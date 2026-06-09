import mongoose from "mongoose";

let isConnected = false;

export const dbConnection = async () => {
  if (isConnected) {
    console.log("Already connected to database!");
    return;
  }
  
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "HospitalManagement",
    });
    isConnected = true;
    console.log("Connected to database!");
  } catch (err) {
    console.log("Some error occured while connecting to database:", err);
    throw err;
  }
};