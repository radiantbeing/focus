import { ActionHeader } from '~/components/action-header';
import { Header } from '~/components/header';
import Main from '~/components/main';
import Navbar from '~/components/navbar';

import Tile from './tile';

const Index = () => (
  <>
    <Header />
    <Main>
      <ActionHeader heading="홍길동의 대시보드" />
      <Tile.List>
        <Tile.Item title="연속 독서" value="5일" description="최고 기록 20일" />
        <Tile.Item
          title="등록 책갈피"
          value="12개"
          description="전 달 대비 +20%"
        />
      </Tile.List>
    </Main>
    <Navbar />
  </>
);

export default Index;
