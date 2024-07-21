import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { Form, redirect, useLoaderData, useNavigate } from '@remix-run/react';
import { RiCloseLine, RiSaveLine } from '@remixicon/react';
import invariant from 'tiny-invariant';

import { ActionHeader } from '~/components/action-header';
import { FormBody } from '~/components/form-body';
import { FormLabel } from '~/components/form-label';
import { IconButton } from '~/components/icon-button';
import { Input } from '~/components/input';
import { Select } from '~/components/select';
import { Textarea } from '~/components/textarea';
import { getBookmark, updateBookmark } from '~/libs/data';
import { BookmarkMutation } from '~/types/bookmark';

export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.bookmarkId, '수정할 책갈피 ID가 존재하지 않습니다.');
  const formData = await request.formData();
  const mutation: BookmarkMutation = Object.fromEntries(formData);
  if (mutation.thumbnailImage && mutation.thumbnailImage.size === 0) {
    delete mutation.thumbnailImage;
  }

  await updateBookmark(params.bookmarkId, mutation);
  return redirect(`/bookmarks/${params.bookmarkId}`);
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.bookmarkId, '책갈피 ID가 존재하지 않습니다.');
  const bookmark = await getBookmark(params.bookmarkId);
  return { bookmark };
};

const BookmarkEdit = () => {
  const { bookmark } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  const handleCancelButtonClick = () => {
    navigate(-1);
  };

  return (
    <Form method="post" encType="multipart/form-data">
      <ActionHeader
        heading={bookmark.book.title}
        subHeading={bookmark.book.author}
      >
        <IconButton
          type="button"
          title="취소"
          onClick={handleCancelButtonClick}
        >
          <RiCloseLine size="1em" />
        </IconButton>
        <IconButton type="submit" title="저장">
          <RiSaveLine size="1em" />
        </IconButton>
      </ActionHeader>
      <FormBody>
        <FormLabel>
          도서
          <Select defaultValue={bookmark.book.id} name="bookId">
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
            name="page"
          />
        </FormLabel>
        <FormLabel>
          내용
          <Textarea defaultValue={bookmark.content} name="content" />
        </FormLabel>
        <FormLabel>
          사진
          <Input type="file" name="thumbnailImage" />
        </FormLabel>
      </FormBody>
    </Form>
  );
};

export default BookmarkEdit;
