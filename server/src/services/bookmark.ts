import type {
  Bookmark,
  NewBookmark,
  UpdateBookmark
} from "../../../shared/types.js";

import BookmarkRepository from "../repositories/bookmark.js";

export class BookmarkService {
  #bookmarkRepository: BookmarkRepository;

  constructor(bookmarkRepository: BookmarkRepository) {
    this.#bookmarkRepository = bookmarkRepository;
  }

  createBookmark(data: NewBookmark): Bookmark {
    return this.#bookmarkRepository.create(data);
  }

  deleteBookmark(id: Bookmark["id"]): void {
    this.#bookmarkRepository.delete(id);
  }

  getBookmark(id: Bookmark["id"]): Bookmark | undefined {
    return this.#bookmarkRepository.get(id);
  }

  listBookmarks(): Bookmark[] {
    return this.#bookmarkRepository.list();
  }

  updateBookmark(
    id: Bookmark["id"],
    data: UpdateBookmark
  ): Bookmark | undefined {
    return this.#bookmarkRepository.update(id, data);
  }
}
