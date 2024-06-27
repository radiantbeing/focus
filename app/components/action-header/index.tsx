import { buttonListStyle, headingStyle, rootStyle } from './action-header.css';

const ActionHeader = ({
  heading,
  children,
}: {
  heading?: string;
  children?: React.ReactNode;
}) => (
  <header className={rootStyle}>
    <h1 className={headingStyle}>{heading}</h1>
    <div className={buttonListStyle}>{children}</div>
  </header>
);

export { ActionHeader };
