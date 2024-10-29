import { Request, Response } from "express";
import { Code } from "../models/Code";

export const saveCode = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { fullCode } = req.body; // Extract fullCode from the body
    if (!fullCode || !fullCode.html || !fullCode.css || !fullCode.javascript) {
      return res.status(400).json({ error: "Missing code data" });
    }
    
    const newCode = await Code.create({ 
      fullCode: {
        html: fullCode.html,
        css: fullCode.css,
        javascript: fullCode.javascript,
      }
    });
    
    console.log(newCode);
    return res.status(200).json({ message: "Code saved successfully", fullCode ,url:newCode._id});
  } catch (error) {
    console.error(`Error in saving code: ${error}`);
    return res.status(500).json({ error: "Error in saving code" });
  }
};

import mongoose from 'mongoose';

export const loadCode = async (req: Request, res: Response) => {
  try {
    const { urlId } = req.body;

    // Check if urlId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(urlId)) {
      return res.status(400).json({ error: "Invalid URL ID format" });
    }

    const existingCode = await Code.findById(urlId);

    if (!existingCode) {
      return res.status(404).json({ error: "Code not found" });
    } else {
      return res.status(200).json({ message: "Code loaded successfully", fullCode: existingCode.fullCode });
    }

  } catch (error) {
    console.error(`Error in loading code: ${error}`);
    return res.status(500).json({ error: "Error in loading code" });
  }
};
