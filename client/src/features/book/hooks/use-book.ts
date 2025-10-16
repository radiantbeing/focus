import type { BookId } from "@shared/types";

import { getBook, listBooks } from "@client/features/book/services/book";
import useQuery from "@client/hooks/use-query";

export function useBook(id: BookId) {
  return useQuery([id], () => getBook(id));
}

export function useBooks() {
  return useQuery([], listBooks);
}
