import express from "express";
import { saveCode } from "../controllers/compilerController";
export const compilerRouter = express.Router();

compilerRouter.post("/save", async (req, res) => {
    await saveCode(req as any, res as any);
  });
  
