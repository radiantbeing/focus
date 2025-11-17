import type {
  BookId,
  Bookmark,
  BookmarkId,
  NewBookmark,
  UpdateBookmark,
} from "../../../shared/src/types.js";

import { getDbInstance } from "../db.js";

const db = getDbInstance();

export default class BookmarkRepository {
  create(bookmark: NewBookmark): Bookmark {
    const createBookmarkStatement = db.prepare<NewBookmark, Bookmark>(
      "INSERT INTO bookmarks (bookId, date, page, summary) VALUES (@bookId, datetime(), @page, @summary) RETURNING *;"
    );

    const createdBookmark = createBookmarkStatement.get(bookmark);
    if (createdBookmark === undefined) {
      throw new Error("데이터베이스에 책갈피가 추가되지 않았습니다.");
    }
    return createdBookmark;
  }

  delete(id: BookmarkId): Bookmark | undefined {
    const deleteBookmarkStatement = db.prepare<[BookmarkId], Bookmark>(
      "DELETE FROM bookmarks WHERE id = ? RETURNING *;"
    );

    const deletedBookmark = deleteBookmarkStatement.get(id);
    return deletedBookmark;
  }

  deleteAll(): Bookmark[] {
    const deleteAllBookmarksStatement = db.prepare<[], Bookmark>(
      "DELETE FROM bookmarks RETURNING *;"
    );

    const deletedBookmarks = deleteAllBookmarksStatement.all();
    return deletedBookmarks;
  }

  get(id: BookmarkId): Bookmark | undefined {
    const getBookmarkStatement = db.prepare<[BookmarkId], Bookmark>(
      "SELECT * FROM bookmarks WHERE id = ?"
    );

    const bookmark = getBookmarkStatement.get(id);
    return bookmark;
  }

  list(): Bookmark[] {
    const listBookmarksStatement = db.prepare<[], Bookmark>(
      "SELECT * FROM bookmarks;"
    );

    const bookmarks = listBookmarksStatement.all();
    return bookmarks;
  }

  listByBookId(bookId: BookId): Bookmark[] {
    const listByBookIdStatement = db.prepare<[BookId], Bookmark>(
      "SELECT * FROM bookmarks WHERE bookId = ?;"
    );

    const bookmarks = listByBookIdStatement.all(bookId);
    return bookmarks;
  }

  update(id: BookmarkId, data: UpdateBookmark): Bookmark | undefined {
    const updateBookmarkStatement = db.prepare<
      UpdateBookmark & { id: BookmarkId },
      Bookmark
    >(
      `
      UPDATE bookmarks
      SET bookId = @bookId, page = @page, summary = @summary
      WHERE id = @id
      RETURNING *`
    );

    const updatedBookmark = updateBookmarkStatement.get({ id, ...data });
    return updatedBookmark;
  }
}
