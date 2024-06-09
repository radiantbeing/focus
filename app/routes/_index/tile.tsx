import { tileDescription, tileHeading, tileHelp, tileRoot } from "./tile.css";

type TileRootProps = {
  children?: React.ReactNode;
};

const TileRoot = ({ children }: TileRootProps) => (
  <article className={tileRoot}>{children}</article>
);

type TileHeadingProps = {
  children?: React.ReactNode;
};

const TileHeading = ({ children }: TileHeadingProps) => (
  <h2 className={tileHeading}>{children}</h2>
);

type TileDescriptionProps = {
  children?: React.ReactNode;
};

const TileDescription = ({ children }: TileDescriptionProps) => (
  <p className={tileDescription}>{children}</p>
);

type TileHelpProps = {
  children?: React.ReactNode;
};

const TileHelp = ({ children }: TileHelpProps) => (
  <p className={tileHelp}>{children}</p>
);

const Tile = Object.assign(TileRoot, {
  Heading: TileHeading,
  Description: TileDescription,
  Help: TileHelp,
});

export default Tile;
