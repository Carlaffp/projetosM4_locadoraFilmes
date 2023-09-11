import { Router } from "express";
import {
  movieCreateController,
  movieDeleteController,
  movieReadController,
  movieUpdateController,
} from "../controllers/movie.controller";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { movieCreateSchema, movieUpdateSchema } from "../schemas/movie.schema";
import { verifyIdExists } from "../middlewares/verifyIdExiste.middleware";
import { verifyNameExists } from "../middlewares/verifyNameExists.middlewarw";
import { paginationMiddleware } from "../middlewares/pagination.middleware";

const moviesRouter = Router();

moviesRouter.post(
  "",
  validateBodyMiddleware(movieCreateSchema),
  verifyNameExists,
  movieCreateController
);
moviesRouter.get("", paginationMiddleware, movieReadController);

moviesRouter.use("/:id", verifyIdExists);

moviesRouter.patch(
  "/:id",
  validateBodyMiddleware(movieUpdateSchema),
  verifyNameExists,
  movieUpdateController
);
moviesRouter.delete("/:id", movieDeleteController);

export default moviesRouter;
