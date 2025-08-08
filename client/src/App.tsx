export default function App() {
    return (
        <div className="mx-auto h-screen w-150 bg-yellow-200">
            <header className="bg-blue-400 font-[Tinos]">FOCUS</header>
            <main className="bg-amber-600">
                <h1>서재</h1>
                <article>
                    <ul>
                        <li>
                            <section>
                                <h2>오디세이아</h2>
                                <p>호메로스</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h2>돈키호테</h2>
                                <p>미겔 데 세르반테스</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h2>위대한 개츠비</h2>
                                <p>F. 스콧 피츠제럴드</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h2>죄와 벌</h2>
                                <p>표도르 도스토옙스키</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h2>호밀밭의 파수꾼</h2>
                                <p>제롬 데이비드 샐린저</p>
                            </section>
                        </li>
                    </ul>
                </article>
            </main>
            <nav className="bg-green-400">
                <ul>
                    <li>대시보드</li>
                    <li>책갈피</li>
                    <li>서재</li>
                    <li>설정</li>
                </ul>
            </nav>
        </div>
    );
}
