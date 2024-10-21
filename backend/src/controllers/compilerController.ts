import { Request, Response } from "express";
import { Code } from "../models/Code";

export const saveCode = async (req: Request, res: Response): Promise<Response> => {
  const { fullcode } = req.body; 

  try {
    const newCode = await Code.create({
      fullCode: {
        html: fullcode.html, 
        css: fullcode.css,
        javascript: fullcode.javascript,
      },
    });

    console.log(newCode);

    return res.status(200).json({ message: "Code saved successfully", newCode });
  } catch (error) {
    console.error(`Error in saving code: ${error}`);
    return res.status(500).json({ error: "Error in saving code" });
  }
};

