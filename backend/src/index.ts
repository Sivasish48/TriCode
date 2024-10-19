import express from "express";
import cors from "cors";
import { connectDB } from "./lib/dbConnection";
import { config } from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
connectDB();
config();

app.listen(5000, () => {
  console.log("Server is running at , http://localhost:5000");
});
