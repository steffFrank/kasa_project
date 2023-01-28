import express from "express";
import { getAllAppartments, getAppartment } from "../controllers/appartment.controller.js";

export const appartmentRouter = express.Router();


appartmentRouter.get("/", getAllAppartments);

appartmentRouter.get("/:id", getAppartment);