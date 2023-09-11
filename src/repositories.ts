import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import { Movie } from "./entities";

const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

export { movieRepository };
