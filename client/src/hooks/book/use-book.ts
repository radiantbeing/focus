import React from "react";

import type { Book, BookId } from "../../../../shared/types";

import { getBook } from "../../services/book";

interface UseBookReturn {
  book: Book | null;
  error: Error | null;
  loading: boolean;
  refetch: () => void;
}

export default function useBook(id?: BookId): UseBookReturn {
  const [book, setBook] = React.useState<Book | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [refetchCount, setRefetchCount] = React.useState(0);

  React.useEffect(
    function () {
      if (id === undefined) {
        setBook(null);
        setError(new Error("도서 식별자가 유효하지 않습니다."));
        setLoading(false);
        return;
      }

      let ignore = false;

      setLoading(true);
      setError(null);
      getBook(id)
        .then(function (book) {
          if (!ignore) {
            setBook(book);
          }
        })
        .catch(function (error: unknown) {
          if (!ignore) {
            setError(
              error instanceof Error
                ? error
                : new Error(
                    "도서 정보를 요청했지만 유효한 응답을 받지 못했습니다."
                  )
            );
          }
        })
        .finally(function () {
          if (!ignore) {
            setLoading(false);
          }
        });

      return function (): void {
        ignore = true;
      };
    },
    [id, refetchCount]
  );

  function refetch(): void {
    setRefetchCount((prev) => prev + 1);
  }

  return {
    book,
    error,
    loading,
    refetch,
  };
}
