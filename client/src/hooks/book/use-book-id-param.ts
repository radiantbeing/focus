import { useParams } from "react-router";

import type { BookId } from "../../../../shared/types";

import { BookIdSchema } from "../../../../shared/validations";

export default function useBookIdParam(): BookId | undefined {
  const { bookId } = useParams();

  return BookIdSchema.parse(bookId);
}
