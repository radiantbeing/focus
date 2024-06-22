import {
  pageHeader,
  pageHeaderButtonList,
  pageHeaderTitle,
} from './page-header.css';

const PageHeader = ({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) => (
  <header className={pageHeader}>
    <h1 className={pageHeaderTitle}>{title}</h1>
    <div className={pageHeaderButtonList}>{children}</div>
  </header>
);

export default PageHeader;
