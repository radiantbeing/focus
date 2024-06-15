import { Link } from '@remix-run/react';

import {
  recordHeader,
  recordItem,
  recordItemDescription,
  recordItemDetails,
  recordItemImage,
  recordItemLink,
  recordItemTitle,
  recordList,
  recordRoot,
} from './record.css';

const RecordRoot = ({ children }: { children?: React.ReactNode }) => (
  <article className={recordRoot}>{children}</article>
);

const RecordHeader = ({ children }: { children?: string }) => (
  <header className={recordHeader}>{children}</header>
);

const RecordList = ({ children }: { children?: React.ReactNode }) => (
  <ul className={recordList}>{children}</ul>
);

const RecordItem = ({
  title,
  description,
  imageUrl,
  to,
}: {
  title?: string;
  description?: string;
  imageUrl?: string;
  to?: string;
}) => {
  const content = (
    <>
      <img src={imageUrl} alt={`${title}의 표지`} className={recordItemImage} />
      <div className={recordItemDetails}>
        <h3 className={recordItemTitle}>{title}</h3>
        <div className={recordItemDescription}>{description}</div>
      </div>
    </>
  );

  return (
    <li className={recordItem}>
      {to ? (
        <Link to={to} className={recordItemLink}>
          {content}
        </Link>
      ) : (
        content
      )}
    </li>
  );
};

const Record = Object.assign(RecordRoot, {
  Header: RecordHeader,
  List: RecordList,
  Item: RecordItem,
});

export default Record;
