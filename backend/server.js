import express from "express";
import { configDotenv } from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { connectMongoDB } from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

configDotenv();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json()); // to parse request.body
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
