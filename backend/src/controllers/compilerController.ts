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
    return res.status(200).json({ message: "Code saved successfully", newCode,url:newCode._id});
  } catch (error) {
    console.error(`Error in saving code: ${error}`);
    return res.status(500).json({ error: "Error in saving code" });
  }
};
