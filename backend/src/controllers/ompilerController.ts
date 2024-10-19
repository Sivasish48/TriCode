import { Request, Response } from "express";

export const saveCode = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(`Error in saving code : ${error}`);
    res.status(500).send("Error in saving code");
  }
};
