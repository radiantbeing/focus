import {
  descriptionStyle,
  headingStyle,
  helpTextStyle,
  itemStyle,
  rootStyle,
} from './tile.css';

const TileList = ({ children }: { children?: React.ReactNode }) => (
  <div className={rootStyle}>{children}</div>
);

const TileItem = ({
  heading,
  value,
  description,
}: {
  heading?: string;
  value?: string;
  description?: string;
}) => (
  <article className={itemStyle}>
    <h2 className={headingStyle}>{heading}</h2>
    <p className={descriptionStyle}>{value}</p>
    <p className={helpTextStyle}>{description}</p>
  </article>
);

export { TileItem, TileList };
