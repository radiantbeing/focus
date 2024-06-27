import { Form } from '@remix-run/react';
import { RiAddLine } from '@remixicon/react';

import { ActionHeader } from '~/components/action-header';
import { Header } from '~/components/header';
import { IconButton } from '~/components/icon-button';
import { Main } from '~/components/main';
import { Navbar } from '~/components/navbar';
import {
  RecordContainer,
  RecordHeader,
  RecordItem,
  RecordList,
} from '~/components/record';

const Bookmarks = () => (
  <>
    <Header />
    <Main>
      <ActionHeader heading="책갈피 목록">
        <Form action="new">
          <IconButton type="submit">
            <RiAddLine size="1em" />
          </IconButton>
        </Form>
      </ActionHeader>
      <RecordContainer>
        <RecordHeader>2024년 8월 21일</RecordHeader>
        <RecordList>
          <RecordItem
            title="1984"
            description="16p"
            imageUrl="https://placehold.co/400x600"
            to="16"
          />
          <RecordItem
            title="Pride and Prejudice"
            description="234p"
            imageUrl="https://placehold.co/400x600"
            to="16"
          />
        </RecordList>
      </RecordContainer>
      <RecordContainer>
        <RecordHeader>2024년 8월 21일</RecordHeader>
        <RecordList>
          <RecordItem
            title="The Great Gatsby"
            description="32p"
            imageUrl="https://placehold.co/400x600"
            to="16"
          />
        </RecordList>
      </RecordContainer>
    </Main>
    <Navbar />
  </>
);

export default Bookmarks;
