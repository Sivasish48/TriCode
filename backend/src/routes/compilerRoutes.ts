import express from "express";
import { saveCode , loadCode} from "../controllers/compilerController";
export const compilerRouter = express.Router();

compilerRouter.post("/save", async (req, res) => {
    await saveCode(req as any, res as any);
  });
  
compilerRouter.post("/load", async (req, res) => {
    await loadCode(req as any, res as any);
});