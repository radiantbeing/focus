import {
  buttonListStyle,
  headerStyle,
  headingStyle,
} from './action-header.css';

const ActionHeader = ({
  heading,
  children,
}: {
  heading?: string;
  children?: React.ReactNode;
}) => (
  <header className={headerStyle}>
    <h1 className={headingStyle}>{heading}</h1>
    <div className={buttonListStyle}>{children}</div>
  </header>
);

export { ActionHeader };
