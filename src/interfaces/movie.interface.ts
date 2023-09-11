
import { z } from "zod";
import { movieCreateSchema, movieReadSchema, movieSchema} from "../schemas/movie.schema";
import { DeepPartial } from "typeorm";
import { Movie } from "../entities";

type MovieRequest = z.infer<typeof movieSchema>
type MovieCreate = z.infer<typeof movieCreateSchema>
type MovieUpdate = DeepPartial<Movie>
type MovieRead = z.infer<typeof movieReadSchema>

export {MovieRequest, MovieCreate, MovieUpdate,MovieRead}