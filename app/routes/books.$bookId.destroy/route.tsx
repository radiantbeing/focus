import { ActionFunctionArgs, redirect } from '@remix-run/node';
import invariant from 'tiny-invariant';

import { deleteBook } from '~/libs/data';

export const action = async ({ params }: ActionFunctionArgs) => {
  invariant(params.bookId, '삭제할 도서 ID가 존재하지 않습니다.');
  await deleteBook(params.bookId);
  return redirect('/books');
};
