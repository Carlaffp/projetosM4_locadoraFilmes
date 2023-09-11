import { z } from "zod";

const movieSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(50),
  description: z.string().nullable().optional(),
  duration: z.number().positive(),
  price: z.number().positive().int(),
});

const movieCreateSchema = movieSchema.omit({ id: true });
const movieUpdateSchema = movieSchema.partial().omit({ id: true });
const movieReadSchema = movieSchema.array();

export { movieSchema, movieCreateSchema, movieUpdateSchema, movieReadSchema };
