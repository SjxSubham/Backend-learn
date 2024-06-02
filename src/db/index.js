import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


//database connection ke time try catch and async and await use krna mandatory hai
// always keep it in mind
// 1. use try catch
// 2. Use async and await
const connectDB = async () => {
    try {
      const connectionInstance =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO DB connection error", error);
        process.exit(1)
    }
}

export default connectDB