import type {
  Bookmark,
  BookmarkId,
  NewBookmark,
  UpdateBookmark
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

  deleteBookmark(id: BookmarkId): BookmarkId | undefined {
    return this.#bookmarkRepository.delete(id);
  }

  getBookmark(id: BookmarkId): Bookmark | undefined {
    return this.#bookmarkRepository.get(id);
  }

  listBookmarks(): Bookmark[] {
    return this.#bookmarkRepository.list();
  }

  updateBookmark(id: BookmarkId, data: UpdateBookmark): Bookmark | undefined {
    return this.#bookmarkRepository.update(id, data);
  }
}
