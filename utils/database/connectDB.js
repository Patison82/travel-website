import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL);
    console.log("Die verbindung zu MongoDB wurde hergestellt!");
  } catch (error) {
    console.error("Fehler bei verbindung zu MongoDB!", error);
  }
};

export default connectDB;
