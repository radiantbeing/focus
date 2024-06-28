import { ActionHeader } from '~/components/action-header';

import { TileItem, TileList } from './tile';

const Index = () => (
  <>
    <ActionHeader heading="홍길동의 대시보드" />
    <TileList>
      <TileItem heading="연속 독서" value="5일" description="최고 기록 20일" />
      <TileItem
        heading="등록 책갈피"
        value="12개"
        description="전 달 대비 +20%"
      />
    </TileList>
  </>
);

export default Index;
