import { ActionFunctionArgs, redirect } from '@remix-run/node';
import invariant from 'tiny-invariant';

import { deleteBookmark } from '~/libs/data';

export const action = async ({ params }: ActionFunctionArgs) => {
  invariant(params.bookmarkId, '삭제할 책갈피 ID가 존재하지 않습니다.');
  await deleteBookmark(params.bookmarkId);
  return redirect('/bookmarks');
};
