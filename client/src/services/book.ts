import { Books } from "../../../shared/validations";
import { ZodError } from "zod";

export async function getBooks() {
    try {
        const res = await fetch("http://localhost:3000/books");

        if (!res.ok) {
            throw new Error(`HTTP_ERROR`);
        }

        const data: unknown = await res.json();
        const books = Books.parse(data);
        return books;
    } catch (error) {
        if (error instanceof ZodError) {
            throw new Error("DATA_VALIDATION_ERROR");
        }
        throw new Error("FETCH_ERROR");
    }
}
