import { Link } from '@remix-run/react';

import { brandStyle, headerStyle } from './header.css';

const Header = ({ children }: { children?: React.ReactNode }) => (
  <header className={headerStyle}>
    <Link to="/" className={brandStyle}>
      FOCUS
    </Link>
    {children}
  </header>
);

export { Header };
