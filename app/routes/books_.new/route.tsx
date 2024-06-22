import { Form, useNavigate } from '@remix-run/react';

import GlobalHeader from '~/components/global-header';
import IconButton from '~/components/icon-button';
import Main from '~/components/main';
import Navbar from '~/components/navbar';
import PageHeader from '~/components/page-header';

import { fieldset, fileInputWrapper, input, label } from './books_.new.css';

const NewBook = () => {
  const navigate = useNavigate();

  return (
    <>
      <GlobalHeader />
      <Main>
        <Form>
          <PageHeader title="새 도서">
            <IconButton title="취소" onClick={() => navigate(-1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1em"
                height="1em"
              >
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            </IconButton>
            <IconButton title="저장">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1em"
                height="1em"
              >
                <path d="M7 19V13H17V19H19V7.82843L16.1716 5H5V19H7ZM4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9 15V19H15V15H9Z"></path>
              </svg>
            </IconButton>
          </PageHeader>
          <fieldset className={fieldset}>
            <label className={label}>
              제목
              <input type="text" placeholder="셜록 홈즈" className={input} />
            </label>
            <label className={label}>
              저자
              <input
                type="text"
                placeholder="아서 코난 도일"
                className={input}
              />
            </label>
            <label className={label}>
              표지
              <div className={fileInputWrapper}>
                <input type="file" accept="image/*" />
              </div>
            </label>
          </fieldset>
        </Form>
      </Main>
      <Navbar />
    </>
  );
};

export default NewBook;
