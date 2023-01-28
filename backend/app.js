import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", true);


try {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const connection = mongoose.connection;
    connection.once("open", () => {
        console.log("MongoDb database connection established successfully!");
    })
} catch(error) {
    console.error(error);
}


export default app;
