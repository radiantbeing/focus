import {
  tileDescription,
  tileHeading,
  tileHelp,
  tileItem,
  tileRoot,
} from "./tile.css";

const TileRoot = ({ children }: { children?: React.ReactNode }) => (
  <div className={tileRoot}>{children}</div>
);

const TileItem = ({
  title,
  value,
  description,
}: {
  title?: string;
  value?: string;
  description?: string;
}) => (
  <article className={tileItem}>
    <h2 className={tileHeading}>{title}</h2>
    <p className={tileDescription}>{value}</p>
    <p className={tileHelp}>{description}</p>
  </article>
);

const Tile = Object.assign(TileRoot, {
  List: TileRoot,
  Item: TileItem,
});

export default Tile;
