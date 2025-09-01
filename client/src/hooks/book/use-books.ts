import React from "react";

import type { Book } from "../../../../shared/types";

import { listBooks } from "../../services/book";

interface UseBooksReturn {
  books: Book[];
  error: Error | null;
  loading: boolean;
  refetch: () => void;
}

export default function useBooks(): UseBooksReturn {
  const [books, setBooks] = React.useState<Book[]>([]);
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [refetchTrigger, setRefetchTrigger] = React.useState(0);

  React.useEffect(
    function () {
      let ignore = false;

      async function loadBooks(): Promise<void> {
        try {
          setLoading(true);
          setError(null);
          const books = await listBooks();
          if (!ignore) {
            setBooks(books);
          }
        } catch (error: unknown) {
          if (!ignore) {
            setError(
              error instanceof Error
                ? error
                : new Error(
                    "도서 목록을 요청했지만 유효한 응답을 받지 못했습니다."
                  )
            );

            if (import.meta.env.DEV) {
              console.error(error);
            }
          }
        } finally {
          if (!ignore) {
            setLoading(false);
          }
        }
      }

      void loadBooks();

      return function (): void {
        ignore = true;
      };
    },
    [refetchTrigger]
  );

  function refetch(): void {
    setRefetchTrigger((prev) => prev + 1);
  }

  return {
    books,
    error,
    loading,
    refetch
  };
}
