import type { BookId } from "@shared/types";

import { BookIdSchema } from "@shared/validations";
import { useParams } from "react-router";

export default function useBookIdParam(): BookId | undefined {
  const { bookId } = useParams();

  return BookIdSchema.parse(bookId);
}
