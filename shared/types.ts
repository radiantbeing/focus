import z from "zod";
import { BookSchema } from "./validations.js";

export type Book = z.infer<typeof BookSchema>;
