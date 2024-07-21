import { LoaderFunctionArgs } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { RiDeleteBinLine, RiPencilLine } from '@remixicon/react';
import invariant from 'tiny-invariant';

import { ActionHeader } from '~/components/action-header';
import { CoverHelpText } from '~/components/cover-help-text';
import { CoverImage } from '~/components/cover-image';
import { FormBody } from '~/components/form-body';
import { FormLabel } from '~/components/form-label';
import { IconButton } from '~/components/icon-button';
import { Input } from '~/components/input';
import { Select } from '~/components/select';
import { Textarea } from '~/components/textarea';
import { getBookmark } from '~/libs/data';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.bookmarkId, '책갈피 ID가 존재하지 않습니다.');
  const bookmark = await getBookmark(params.bookmarkId);
  return { bookmark };
};

const BookmarkDetail = () => {
  const { bookmark } = useLoaderData<typeof loader>();

  return (
    <>
      <ActionHeader
        heading={bookmark.book.title}
        subHeading={bookmark.book.author}
      >
        <Form action="destroy" method="post">
          <IconButton title="삭제">
            <RiDeleteBinLine size="1em" />
          </IconButton>
        </Form>
        <Form action="edit">
          <IconButton title="수정">
            <RiPencilLine size="1em" />
          </IconButton>
        </Form>
      </ActionHeader>
      <FormBody>
        <FormLabel>
          도서
          <Select defaultValue={bookmark.book.id} disabled>
            <option value={bookmark.book.id}>{bookmark.book.title}</option>
          </Select>
        </FormLabel>
        <FormLabel>
          쪽
          <Input
            type="number"
            inputMode="decimal"
            min={1}
            defaultValue={bookmark.page}
          />
        </FormLabel>
        <FormLabel>
          내용
          <Textarea>{bookmark.content}</Textarea>
        </FormLabel>
        <FormLabel>
          사진
          {bookmark.thumbnailImageUrl ? (
            <CoverImage
              src={bookmark.thumbnailImageUrl}
              alt={`${bookmark.book.title}의 ${bookmark.page}쪽 촬영 사진`}
            />
          ) : (
            <CoverHelpText>설정된 사진이 없습니다.</CoverHelpText>
          )}
        </FormLabel>
      </FormBody>
    </>
  );
};

export default BookmarkDetail;
