import { heading } from "./heading.css";

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h1 className={heading}>{children}</h1>
);

export default Heading;
