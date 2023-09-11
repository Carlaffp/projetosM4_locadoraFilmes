import "express-async-errors";
import express, { Application, json } from "express";
import moviesRouter from "./routers/movie.router";
import handleErrorsMiddleware from "./middlewares/handleErrors.middleware";

const app: Application = express();
app.use(json());

app.use("/movies", moviesRouter);

app.use(handleErrorsMiddleware.erro);

export default app;
