import type { Bookmark } from "@shared/types";

import { listBookmarks } from "@client/features/bookmark/services/bookmark";
import React from "react";

interface UseBookmarksReturn {
  bookmarks: Bookmark[];
  error: Error | null;
  loading: boolean;
  refetch: () => void;
}

export default function useBookmarks(): UseBookmarksReturn {
  const [bookmarks, setBookmarks] = React.useState<Bookmark[]>([]);
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [refetchCounter, setRefetchCounter] = React.useState(0);

  React.useEffect(
    function () {
      let ignore = false;

      setError(null);
      setLoading(true);
      listBookmarks()
        .then(function (bookmarks) {
          if (!ignore) {
            setBookmarks(bookmarks);
          }
        })
        .catch(function (error: unknown) {
          if (!ignore) {
            setError(
              error instanceof Error
                ? error
                : new Error(
                    "책갈피 목록을 요청했지만 유효한 응답을 받지 못했습니다."
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
    [refetchCounter]
  );

  function refetch(): void {
    setRefetchCounter((prev) => prev + 1);
  }

  return {
    bookmarks,
    error,
    loading,
    refetch,
  };
}
