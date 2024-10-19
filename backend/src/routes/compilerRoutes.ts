import express from "express";
import { saveCode } from "../controllers/ompilerController";
export const router = express.Router();


router.post("/compiler", saveCode);
