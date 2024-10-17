import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("working fine");
});

app.listen(5000, () => {
  console.log("Server is running at , http://localhost:5000");
});
