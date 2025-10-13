import React from "react";

import type { Bookmark, BookmarkId } from "../../../../shared/types";

import { getBookmark } from "../../services/bookmark";

interface UseBookmarkReturn {
  bookmark: Bookmark | null;
  error: Error | null;
  loading: boolean;
  refetch: () => void;
}

export default function useBookmark(id?: BookmarkId): UseBookmarkReturn {
  const [bookmark, setBookmark] = React.useState<Bookmark | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [refetchCount, setRefetchCount] = React.useState(0);

  React.useEffect(
    function () {
      if (id === undefined) {
        setError(new Error("책갈피 식별자가 유효하지 않습니다."));
        setLoading(false);
        return;
      }

      let ignore = false;

      setError(null);
      setLoading(true);
      getBookmark(id)
        .then(function (bookmark) {
          if (!ignore) {
            setBookmark(bookmark);
          }
        })
        .catch(function (error: unknown) {
          if (!ignore) {
            setError(
              error instanceof Error
                ? error
                : new Error(
                    "책갈피 정보를 요청했지만 유효한 응답을 받지 못했습니다."
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
    bookmark,
    error,
    loading,
    refetch,
  };
}
