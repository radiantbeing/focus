import { Form, useNavigate } from '@remix-run/react';
import { RiCloseLine, RiSaveLine } from '@remixicon/react';

import { FormBody } from '~/components/form-body';
import { FormInput } from '~/components/form-input';
import { FormLabel } from '~/components/form-label';
import GlobalHeader from '~/components/global-header';
import IconButton from '~/components/icon-button';
import Main from '~/components/main';
import Navbar from '~/components/navbar';
import PageHeader from '~/components/page-header';

const NewBook = () => {
  const navigate = useNavigate();

  return (
    <>
      <GlobalHeader />
      <Main>
        <Form>
          <PageHeader title="새 도서">
            <IconButton title="취소" onClick={() => navigate(-1)}>
              <RiCloseLine size="1em" />
            </IconButton>
            <IconButton title="저장">
              <RiSaveLine size="1em" />
            </IconButton>
          </PageHeader>
          <FormBody>
            <FormLabel>
              제목
              <FormInput type="text" placeholder="셜록 홈즈" />
            </FormLabel>
            <FormLabel>
              저자
              <FormInput type="text" placeholder="아서 코난 도일" />
            </FormLabel>
            <FormLabel>
              표지
              <FormInput type="file" accept="image/*" />
            </FormLabel>
          </FormBody>
        </Form>
      </Main>
      <Navbar />
    </>
  );
};

export default NewBook;
