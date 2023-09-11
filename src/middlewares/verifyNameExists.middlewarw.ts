import { NextFunction, Request, Response } from "express";
import { Movie } from "../entities";
import { movieRepository } from "../repositories";
import AppError from "../error";

const verifyNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.body.name) return next();
  const foundMovieName: Movie | null = await movieRepository.findOneBy({
    name: req.body.name,
  });
  if (foundMovieName) {
    throw new AppError("Movie already exists.", 409);
  }
  return next();
};

export { verifyNameExists };
