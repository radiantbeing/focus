import {
  buttonListStyle,
  headerStyle,
  headingContainerStyle,
  headingStyle,
  smallHeadingStyle,
  subHeadingStyle,
} from './action-header.css';

type ActionHeaderProps = {
  heading?: string;
  subHeading?: string;
  children?: React.ReactNode;
};
const ActionHeader = ({ heading, subHeading, children }: ActionHeaderProps) => (
  <header className={headerStyle}>
    <div className={headingContainerStyle}>
      <h1 className={subHeading ? smallHeadingStyle : headingStyle}>
        {heading}
      </h1>
      {subHeading && <h2 className={subHeadingStyle}>{subHeading}</h2>}
    </div>
    <div className={buttonListStyle}>{children}</div>
  </header>
);

export { ActionHeader };
