import type {
  BookId,
  Bookmark,
  BookmarkId,
  NewBookmark,
  UpdateBookmark
} from "../../../shared/types.js";

export default class BookmarkRepository {
  #bookmarks = BOOKMARKS;
  #lastId = BOOKMARKS.length - 1;

  create(bookmark: NewBookmark): Bookmark {
    const newBookmark = {
      ...bookmark,
      date: new Date(),
      id: (this.#lastId + 1).toString()
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

const BOOKMARKS: Bookmark[] = [
  {
    bookId: "0",
    date: new Date("2025-01-15"),
    id: "0",
    page: 87,
    summary:
      "오디세우스가 로터스를 먹는 자들의 땅에 도착하는 부분이 인상적이었다."
  },
  {
    bookId: "1",
    date: new Date("2025-01-16"),
    id: "1",
    page: 156,
    summary:
      "돈키호테가 풍차를 거인으로 착각하는 유명한 장면. 현실과 이상의 갈등이 잘 드러남."
  },
  {
    bookId: "2",
    date: new Date("2025-02-03"),
    id: "2",
    page: 92,
    summary:
      "개츠비의 초록불에 대한 묘사가 아름다웠다. 꿈과 현실 사이의 거리감을 느낄 수 있었다."
  },
  {
    bookId: "3",
    date: new Date("2025-02-05"),
    id: "3",
    page: 234,
    summary:
      "라스콜니코프의 내적 갈등이 절정에 달하는 부분. 죄책감과 자기합리화 사이에서 흔들리는 모습."
  },
  {
    bookId: "4",
    date: new Date("2025-02-06"),
    id: "4",
    page: 67,
    summary:
      "홀든의 독특한 어조가 매력적이다. 기성세대에 대한 반감이 잘 표현된 부분."
  },
  {
    bookId: "5",
    date: new Date("2025-03-01"),
    id: "5",
    page: 143,
    summary:
      "빅브라더의 감시 체계에 대한 설명. 현대 사회와의 유사점이 소름끼친다."
  },
  {
    bookId: "6",
    date: new Date("2025-03-03"),
    id: "6",
    page: 198,
    summary: "애티커스 핀치의 변론 장면. 정의에 대한 깊은 성찰을 하게 된다."
  },
  {
    bookId: "7",
    date: new Date("2025-03-15"),
    id: "7",
    page: 89,
    summary:
      "마콘도라는 가상의 마을 설정이 흥미롭다. 마술적 사실주의의 대표적인 예시."
  },
  {
    bookId: "8",
    date: new Date("2025-03-16"),
    id: "8",
    page: 456,
    summary:
      "나타샤와 안드레이의 첫 만남 장면. 톨스토이의 섬세한 심리 묘사가 돋보인다."
  },
  {
    bookId: "9",
    date: new Date("2025-04-02"),
    id: "9",
    page: 123,
    summary:
      "엘리자베스와 다아시의 첫인상 장면. 편견이 어떻게 형성되는지 잘 보여준다."
  },
  {
    bookId: "10",
    date: new Date("2025-04-03"),
    id: "10",
    page: 201,
    summary:
      "흰 고래에 대한 아하브 선장의 집착이 무서울 정도다. 복수심의 파괴적 힘을 느낀다."
  },
  {
    bookId: "11",
    date: new Date("2025-04-18"),
    id: "11",
    page: 78,
    summary:
      "허클베리가 짐과 함께 뗏목을 타고 미시시피 강을 내려가는 장면. 자유에 대한 갈망."
  },
  {
    bookId: "12",
    date: new Date("2025-04-19"),
    id: "12",
    page: 167,
    summary:
      "핍이 신사가 되기를 꿈꾸며 런던으로 떠나는 부분. 계급 사회의 모순을 생각하게 된다."
  },
  {
    bookId: "13",
    date: new Date("2025-05-09"),
    id: "13",
    page: 45,
    summary:
      "'사느냐 죽느냐 그것이 문제로다.' 유명한 독백 장면. 실존적 고민이 깊이 와닿는다."
  },
  {
    bookId: "14",
    date: new Date("2025-05-10"),
    id: "14",
    page: 89,
    summary:
      "뫼르소가 어머니의 장례식에서 보이는 무관심. 부조리함에 대한 카뮈의 철학이 드러난다."
  },
  {
    bookId: "3",
    date: new Date("2025-05-11"),
    id: "15",
    page: 312,
    summary:
      "소냐가 라스콜니코프에게 성경을 읽어주는 장면. 구원과 희망에 대한 메시지가 감동적이다."
  },
  {
    bookId: "5",
    date: new Date("2025-05-24"),
    id: "16",
    page: 89,
    summary: "2분간 증오 시간의 묘사가 섬뜩하다. 집단 광기의 무서움을 실감한다."
  },
  {
    bookId: "1",
    date: new Date("2025-06-01"),
    id: "17",
    page: 234,
    summary:
      "산초 판사의 현실적인 조언들이 돈키호테의 이상주의와 대비되어 재미있다."
  },
  {
    bookId: "8",
    date: new Date("2025-06-03"),
    id: "18",
    page: 612,
    summary:
      "보로디노 전투 장면의 웅장함. 전쟁의 혼돈 속에서도 인간다움을 잃지 않는 모습들."
  },
  {
    bookId: "2",
    date: new Date("2025-06-15"),
    id: "19",
    page: 145,
    summary:
      "개츠비의 파티 장면. 화려함 뒤에 숨겨진 공허함과 외로움이 느껴진다."
  },
  {
    bookId: "10",
    date: new Date("2025-06-22"),
    id: "20",
    page: 456,
    summary:
      "이스마엘의 바다에 대한 철학적 사색. 자연 앞에서 인간의 왜소함을 깨닫는다."
  },
  {
    bookId: "7",
    date: new Date("2025-06-29"),
    id: "21",
    page: 234,
    summary:
      "우르술라의 장수와 가족사를 지켜보는 모습. 시간의 순환성에 대해 생각하게 된다."
  },
  {
    bookId: "4",
    date: new Date("2025-07-06"),
    id: "22",
    page: 123,
    summary:
      "홀든이 동생 피비와 대화하는 장면. 순수함에 대한 그의 갈망이 절절하게 느껴진다."
  },
  {
    bookId: "12",
    date: new Date("2025-07-13"),
    id: "23",
    page: 289,
    summary:
      "에스텔라와의 재회 장면. 핍의 성숙한 모습과 진정한 사랑에 대한 깨달음."
  },
  {
    bookId: "6",
    date: new Date("2025-07-20"),
    id: "24",
    page: 87,
    summary:
      "스카웃이 부 래들리에 대해 품었던 편견이 무너지는 과정. 이해와 공감의 힘."
  },
  {
    bookId: "0",
    date: new Date("2025-07-27"),
    id: "25",
    page: 234,
    summary:
      "키르케 여신과의 만남. 마법과 현실이 교차하는 신비로운 분위기가 매혹적이다."
  },
  {
    bookId: "9",
    date: new Date("2025-08-03"),
    id: "26",
    page: 187,
    summary:
      "다아시의 편지를 읽는 엘리자베스. 오해가 풀리면서 진실이 드러나는 전환점."
  },
  {
    bookId: "11",
    date: new Date("2025-08-10"),
    id: "27",
    page: 156,
    summary:
      "허클이 짐을 배신할지 고민하는 장면. 도덕적 갈등 속에서 인간애를 선택하는 모습."
  },
  {
    bookId: "13",
    date: new Date("2025-08-17"),
    id: "28",
    page: 156,
    summary:
      "오필리아의 광기 장면. 순수한 사랑이 비극으로 변하는 과정이 안타깝다."
  },
  {
    bookId: "14",
    date: new Date("2025-08-24"),
    id: "29",
    page: 34,
    summary:
      "해변에서의 총격 사건. 뫼르소의 무감정한 반응이 오히려 충격적으로 다가온다."
  },
  {
    bookId: "3",
    date: new Date("2025-08-31"),
    id: "30",
    page: 45,
    summary:
      "라스콜니코프가 전당포 할머니를 살해하는 장면. 범죄의 순간이 생생하게 묘사되어 충격적이다."
  },
  {
    bookId: "7",
    date: new Date("2025-09-07"),
    id: "31",
    page: 156,
    summary:
      "호세 아르카디오 부엔디아의 연금술 실험. 고독 속에서 진리를 추구하는 인간의 모습."
  },
  {
    bookId: "8",
    date: new Date("2025-09-14"),
    id: "32",
    page: 123,
    summary:
      "피에르의 내적 성장 과정. 전쟁 속에서도 인생의 의미를 찾아가는 여정이 인상적이다."
  },
  {
    bookId: "10",
    date: new Date("2025-09-21"),
    id: "33",
    page: 89,
    summary:
      "스타벅의 현명한 조언을 무시하는 아하브. 이성과 광기의 대립이 극명하게 드러난다."
  },
  {
    bookId: "2",
    date: new Date("2025-09-28"),
    id: "34",
    page: 178,
    summary:
      "개츠비의 죽음 장면. 아메리칸 드림의 몰락과 함께 시대의 끝을 상징하는 듯하다."
  }
];
