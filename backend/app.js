import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Appartment from "./models/appartment.model.js";

import appartments from "./json.js";

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

// Save all the appartments in the database

Appartment.create(appartments, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("All the appartments were saved successfully");
    }
})

export default app;
