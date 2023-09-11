import {
  MovieCreate,
  MovieRead,
  MovieUpdate,
} from "../interfaces/movie.interface";
import { Movie } from "../entities/index";
import { movieRepository } from "../repositories";
import {
  Pagination,
  PaginationParams,
} from "../interfaces/pagination.interfaces";

const movieCreateService = async (payload: MovieCreate): Promise<Movie> => {
  const movie: Movie = movieRepository.create(payload);
  await movieRepository.save(movie);

  return movie;
};

const movieReadService = async ({
  nextPage,
  page,
  perPage,
  prevPage,
  order,
  sort,
}: PaginationParams): Promise<Pagination> => {
  const [movie, count]: Array<MovieRead | number> =
    await movieRepository.findAndCount({
      order: { [sort]: order },
      skip: page,
      take: perPage,
    });
  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movie,
  };
};

const movieUpdateService = async (
  movie: Movie,
  payload: MovieUpdate
): Promise<Movie> => {
  return await movieRepository.save({ ...movie, ...payload });
};

const movieDeleteService = async (movie: Movie): Promise<void> => {
  await movieRepository.remove(movie);
};

export {
  movieCreateService,
  movieReadService,
  movieDeleteService,
  movieUpdateService,
};
