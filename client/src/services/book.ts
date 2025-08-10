import z, { ZodError } from "zod";
import { type Book } from "../../../shared/types";
import { BookSchema } from "../../../shared/validations";

export async function getBooks(): Promise<Book[]> {
    try {
        const res = await fetch("http://localhost:3000/books");

        if (!res.ok) {
            throw new Error(`HTTP_ERROR`);
        }

        const data: unknown = await res.json();
        return z.array(BookSchema).parse(data);
    } catch (error) {
        if (error instanceof ZodError) {
            throw new Error("DATA_VALIDATION_ERROR");
        }
        throw new Error("FETCH_ERROR");
    }
}
