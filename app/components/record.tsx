import { Link } from '@remix-run/react';

import {
  containerStyle,
  detailsStyle,
  headerStyle,
  headingStyle,
  imageStyle,
  itemStyle,
  linkStyle,
  listStyle,
} from './record.css';

const RecordContainer = ({ children }: { children?: React.ReactNode }) => (
  <article className={containerStyle}>{children}</article>
);

const RecordHeader = ({ children }: { children?: string }) => (
  <header className={headerStyle}>{children}</header>
);

const RecordList = ({ children }: { children?: React.ReactNode }) => (
  <ul className={listStyle}>{children}</ul>
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
      <img src={imageUrl} alt={`${title}의 표지`} className={imageStyle} />
      <div className={detailsStyle}>
        <h3 className={headingStyle}>{title}</h3>
        <div>{description}</div>
      </div>
    </>
  );

  return (
    <li className={itemStyle}>
      {to ? (
        <Link to={to} className={linkStyle}>
          {content}
        </Link>
      ) : (
        content
      )}
    </li>
  );
};

export { RecordContainer, RecordHeader, RecordItem, RecordList };
