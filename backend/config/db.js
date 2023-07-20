import mongoose from "mongoose";

// CONNECT TO THE DATABASE
// Now we need to connect to the database. We will be using mongoose for that, which we already installed. 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
