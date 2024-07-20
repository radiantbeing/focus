import { Form, json, useLoaderData } from '@remix-run/react';
import { RiAddLine } from '@remixicon/react';

import { ActionHeader } from '~/components/action-header';
import { IconButton } from '~/components/icon-button';
import {
  RecordContainer,
  RecordHeader,
  RecordItem,
  RecordList,
} from '~/components/record';
import { getBookmarks } from '~/libs/data';
import { BookmarkRecord } from '~/types/bookmark';

export const loader = async () => {
  const bookmarks = await getBookmarks();
  return json({ bookmarks });
};

const Bookmarks = () => {
  const { bookmarks } = useLoaderData<typeof loader>();

  const bookmarksByDate: Record<string, BookmarkRecord[]> = bookmarks.reduce(
    (groupedBookmarks, bookmark) => {
      const date = bookmark.date;

      if (!(date in groupedBookmarks)) {
        groupedBookmarks[date] = [];
      }

      groupedBookmarks[date].push(bookmark);
      return groupedBookmarks;
    },
    {} as Record<string, BookmarkRecord[]>
  );

  return (
    <>
      <ActionHeader heading="책갈피 목록">
        <Form action="new">
          <IconButton type="submit">
            <RiAddLine size="1em" />
          </IconButton>
        </Form>
      </ActionHeader>
      {Object.keys(bookmarksByDate).map((date) => (
        <RecordContainer key={date}>
          <RecordHeader>{new Date(date).toLocaleDateString()}</RecordHeader>
          <RecordList>
            {bookmarksByDate[date].map((bookmark) => (
              <RecordItem
                key={bookmark.id}
                title={bookmark.bookTitle}
                description={`${bookmark.page}p`}
                imageUrl={bookmark.thumbnailImageUrl}
                to={bookmark.id}
              />
            ))}
          </RecordList>
        </RecordContainer>
      ))}
    </>
  );
};

export default Bookmarks;
