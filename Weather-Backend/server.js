
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import weatherRoutes from "./routes/weather.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

app.use("/api/weather", weatherRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`🌍 Server running on port ${port}`));
