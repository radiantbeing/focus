import { ActionFunctionArgs } from '@remix-run/node';
import {
  Form,
  json,
  redirect,
  useLoaderData,
  useNavigate,
} from '@remix-run/react';
import { RiCloseLine, RiSaveLine } from '@remixicon/react';

import { getBooks } from '~/api/book';
import { ActionHeader } from '~/components/action-header';
import { FormBody } from '~/components/form-body';
import { FormLabel } from '~/components/form-label';
import { IconButton } from '~/components/icon-button';
import { Input } from '~/components/input';
import { Select } from '~/components/select';
import { Textarea } from '~/components/textarea';
import { createBookmark } from '~/libs/data';
import { urlBuilder } from '~/libs/url-builder';
import { BookmarkMutation } from '~/types/bookmark';

export const loader = async () => {
  const url = urlBuilder.build('/books');
  const books = await getBooks(url);
  return json({ books });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const mutation: BookmarkMutation = Object.fromEntries(formData);

  if (mutation.thumbnailImage && mutation.thumbnailImage.size === 0) {
    delete mutation.thumbnailImage;
  }

  const createdBookmark = await createBookmark(mutation);
  return redirect(`/bookmarks/${createdBookmark.id}`);
};

const NewBookmark = () => {
  const { books } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  const handleCancelButtonClick = () => {
    navigate(-1);
  };

  return (
    <Form method="post" encType="multipart/form-data">
      <ActionHeader heading="새 책갈피">
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
          <Select defaultValue="" name="bookId">
            <option value="" disabled>
              도서를 선택해주세요.
            </option>
            {books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </Select>
        </FormLabel>
        <FormLabel>
          쪽
          <Input
            type="number"
            inputMode="decimal"
            min={1}
            defaultValue={1}
            name="page"
          />
        </FormLabel>
        <FormLabel>
          내용
          <Textarea name="content" />
        </FormLabel>
        <FormLabel>
          사진
          <Input type="file" name="thumbnailImage" />
        </FormLabel>
      </FormBody>
    </Form>
  );
};

export default NewBookmark;
