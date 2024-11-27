import mongoose from "mongoose";
import config from "./config.js";

const connectDb = async () => {
    try {
        mongoose.connect(config.databaseUrl);
        console.log("database connected successfully.");
    } catch (error) {
        console.log(`database connection error ${error}`);
        process.exit(1);
    };
};

export default connectDb;