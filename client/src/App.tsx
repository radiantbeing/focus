import { Bolt, Bookmark, House, LibraryBig } from "lucide-react";

export default function App() {
    return (
        <div className="mx-auto w-full max-w-150">
            <header className="fixed top-0 flex h-12 w-full max-w-150 items-center border-b border-gray-400 px-2 font-[Tinos] text-2xl backdrop-blur-3xl">
                FOCUS
            </header>
            <main className="px-2 pt-14 pb-17">
                <h1 className="text-lg font-bold">서재</h1>
                <article>
                    <ul className="divide-y divide-gray-300">
                        {BOOKS.map((book) => (
                            <li className="py-1">
                                <a href={`/books/${book.id.toString()}`}>
                                    <h2 className="font-bold">{book.title}</h2>
                                    <div>{book.author}</div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </article>
            </main>
            <nav className="fixed bottom-0 flex h-15 w-full max-w-150 items-center border-t border-gray-400 bg-white px-2 pt-1">
                <a
                    href="/dashboard"
                    className="flex flex-1 flex-col items-center gap-y-0.5 text-sm"
                >
                    <House size={18} />
                    <span>대시보드</span>
                </a>
                <a
                    href="/bookmark"
                    className="flex flex-1 flex-col items-center gap-y-0.5 text-sm"
                >
                    <Bookmark size={18} />
                    <span>책갈피</span>
                </a>
                <a
                    href="/library"
                    className="flex flex-1 flex-col items-center gap-y-0.5 text-sm"
                >
                    <LibraryBig size={18} />
                    <span>서재</span>
                </a>
                <a
                    href="/setting"
                    className="flex flex-1 flex-col items-center gap-y-0.5 text-sm"
                >
                    <Bolt size={18} />
                    <span>설정</span>
                </a>
            </nav>
        </div>
    );
}

interface Book {
    author: string;
    id: number;
    title: string;
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
