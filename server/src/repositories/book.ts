import type {
  Book,
  BookId,
  NewBook,
  UpdateBook
} from "../../../shared/types.js";

export default class BookRepository {
  #books = BOOKS;
  #lastId = BOOKS.length - 1;

  create(book: NewBook): Book {
    const newBook = { ...book, id: this.#lastId + 1 };
    this.#lastId += 1;
    this.#books.push(newBook);
    return newBook;
  }

  delete(id: BookId): BookId | undefined {
    const length = this.#books.length;
    this.#books = this.#books.filter((b) => b.id !== id);
    return this.#books.length < length ? id : undefined;
  }

  get(id: BookId): Book | undefined {
    return this.#books.find((b) => b.id === id);
  }

  list(): Book[] {
    return this.#books;
  }

  update(id: BookId, data: UpdateBook): Book | undefined {
    const index = this.#books.findIndex((b) => b.id === id);

    if (index === -1) {
      return;
    }

    return Object.assign(this.#books[index], data);
  }
}

const BOOKS: Book[] = [
  {
    author: "호메로스",
    id: 0,
    title: "오디세이아"
  },
  {
    author: "미겔 데 세르반테스",
    id: 1,
    title: "돈키호테"
  },
  {
    author: "F. 스콧 피츠제럴드",
    id: 2,
    title: "위대한 개츠비"
  },
  {
    author: "표도르 도스토옙스키",
    id: 3,
    title: "죄와 벌"
  },
  {
    author: "제롬 데이비드 샐린저",
    id: 4,
    title: "호밀밭의 파수꾼"
  },
  {
    author: "조지 오웰",
    id: 5,
    title: "1984"
  },
  {
    author: "하퍼 리",
    id: 6,
    title: "앵무새 죽이기"
  },
  {
    author: "가브리엘 가르시아 마르케스",
    id: 7,
    title: "백년 동안의 고독"
  },
  {
    author: "레프 톨스토이",
    id: 8,
    title: "전쟁과 평화"
  },
  {
    author: "제인 오스틴",
    id: 9,
    title: "오만과 편견"
  },
  {
    author: "허먼 멜빌",
    id: 10,
    title: "모비딕"
  },
  {
    author: "마크 트웨인",
    id: 11,
    title: "허클베리 핀의 모험"
  },
  {
    author: "찰스 디킨스",
    id: 12,
    title: "위대한 유산"
  },
  {
    author: "윌리엄 셰익스피어",
    id: 13,
    title: "햄릿"
  },
  {
    author: "알베르 카뮈",
    id: 14,
    title: "이방인"
  }
];
