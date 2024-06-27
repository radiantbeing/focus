import { Link } from '@remix-run/react';

import { brandStyle, rootStyle } from './header.css';

const Header = ({ children }: { children?: React.ReactNode }) => (
  <header className={rootStyle}>
    <Link to="/" className={brandStyle}>
      FOCUS
    </Link>
    {children}
  </header>
);

export { Header };
