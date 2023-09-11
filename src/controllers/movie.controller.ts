import { Request, Response } from "express";
import { MovieRead, MovieRequest } from "../interfaces/movie.interface";
import {
  movieCreateService,
  movieDeleteService,
  movieReadService,
  movieUpdateService,
} from "../services/movie.service";
import { Movie } from "../entities";
import { Pagination } from "../interfaces/pagination.interfaces";

const movieCreateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movieData: MovieRequest = req.body;
  const create = await movieCreateService(movieData);
  return res.status(201).json(create);
};

const movieReadController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { pagination } = res.locals;
  const read: Pagination = await movieReadService(pagination);
  return res.status(200).json(read);
};

const movieUpdateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { foundMovie } = res.locals;
  const { body } = req;
  const updateMovie: Movie = await movieUpdateService(foundMovie, body);
  return res.status(200).json(updateMovie);
};

const movieDeleteController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await movieDeleteService(res.locals.foundMovie);
  return res.status(204).json();
};

export {
  movieCreateController,
  movieReadController,
  movieDeleteController,
  movieUpdateController,
};
