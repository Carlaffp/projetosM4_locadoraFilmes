import { NextFunction, Request, Response } from "express";
import AppError from "../error";
import { z } from "zod";

const erro = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  if (err instanceof z.ZodError) {
    return res.status(400).json({ message: err.flatten().fieldErrors });
  }

  console.log(err);
  return res.status(500).json({ message: "Internal Server Error" });
};
export default { erro };
