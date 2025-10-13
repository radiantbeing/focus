import type {
  BookId,
  Bookmark,
  BookmarkId,
  NewBookmark,
  UpdateBookmark,
} from "../../../shared/types.js";

import BookmarkRepository from "../repositories/bookmark.js";

export default class BookmarkService {
  #bookmarkRepository: BookmarkRepository;

  constructor(bookmarkRepository: BookmarkRepository) {
    this.#bookmarkRepository = bookmarkRepository;
  }

  createBookmark(data: NewBookmark): Bookmark {
    return this.#bookmarkRepository.create(data);
  }

  deleteBookmark(id: BookmarkId): Bookmark | undefined {
    return this.#bookmarkRepository.delete(id);
  }

  deleteBookmarks(): Bookmark[] {
    return this.#bookmarkRepository.deleteAll();
  }

  getBookmark(id: BookmarkId): Bookmark | undefined {
    return this.#bookmarkRepository.get(id);
  }

  listBookmarks(): Bookmark[] {
    return this.#bookmarkRepository.list();
  }

  listBookmarksByBookId(bookId: BookId): Bookmark[] {
    return this.#bookmarkRepository.listByBookId(bookId);
  }

  updateBookmark(id: BookmarkId, data: UpdateBookmark): Bookmark | undefined {
    return this.#bookmarkRepository.update(id, data);
  }
}
