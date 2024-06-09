import Header from "~/components/header";
import Main from "~/components/main";
import Navbar from "~/components/navbar";

import { dashboardContainer, heading } from "./route.css";
import Tile from "./tile";

const Index = () => (
  <>
    <Header />
    <Main>
      <h1 className={heading}>홍길동의 대시보드</h1>
      <div className={dashboardContainer}>
        <Tile>
          <Tile.Heading>연속 독서</Tile.Heading>
          <Tile.Description>5일</Tile.Description>
          <Tile.Help>최고 기록 20일</Tile.Help>
        </Tile>
        <Tile>
          <Tile.Heading>등록 책갈피</Tile.Heading>
          <Tile.Description>12개</Tile.Description>
          <Tile.Help>전 달 대비 +20%</Tile.Help>
        </Tile>
      </div>
    </Main>
    <Navbar />
  </>
);

export default Index;
