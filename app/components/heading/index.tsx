import { heading } from './heading.css';

const Heading = ({
  as: Tag = 'h1',
  children,
}: {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: React.ReactNode;
}) => <Tag className={heading}>{children}</Tag>;

export default Heading;
