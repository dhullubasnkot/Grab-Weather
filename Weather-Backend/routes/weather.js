
import express from "express";
import { fetchWeather } from "../controllers/weatherController.js";

const router = express.Router();
router.post("/", fetchWeather);

export default router;
