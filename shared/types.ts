import { Book, Books } from "./validations.js";
import * as z from "zod";

export type Book = z.infer<typeof Book>;

export type Books = z.infer<typeof Books>;
