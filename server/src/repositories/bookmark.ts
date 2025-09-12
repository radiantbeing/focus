import type {
  BookId,
  Bookmark,
  BookmarkId,
  NewBookmark,
  UpdateBookmark
} from "../../../shared/types.js";

import { EXAMPLE_BOOKMARKS } from "../constants.js";

export default class BookmarkRepository {
  #bookmarks = EXAMPLE_BOOKMARKS;
  #lastId = EXAMPLE_BOOKMARKS.length - 1;

  create(bookmark: NewBookmark): Bookmark {
    const newBookmark: Bookmark = {
      ...bookmark,
      date: new Date(),
      id: this.#lastId + 1
    };
    this.#lastId += 1;
    this.#bookmarks.push(newBookmark);
    return newBookmark;
  }

  delete(id: BookmarkId): BookmarkId | undefined {
    const length = this.#bookmarks.length;
    this.#bookmarks = this.#bookmarks.filter((b) => b.id !== id);
    return this.#bookmarks.length < length ? id : undefined;
  }

  deleteAll(): (BookmarkId | undefined)[] {
    const bookmarkIds = this.#bookmarks.map((b) => b.id);
    const deletedBookIds = bookmarkIds.map((id) => this.delete(id));
    return deletedBookIds;
  }

  get(id: BookmarkId): Bookmark | undefined {
    return this.#bookmarks.find((b) => b.id === id);
  }

  list(): Bookmark[] {
    return this.#bookmarks;
  }

  listByBookId(bookId: BookId): Bookmark[] {
    return this.#bookmarks.filter((b) => b.bookId === bookId);
  }

  update(id: BookmarkId, data: UpdateBookmark): Bookmark | undefined {
    const index = this.#bookmarks.findIndex((b) => b.id === id);

    if (index === -1) {
      return;
    }

    return Object.assign(this.#bookmarks[index], data);
  }
}
