import { Link } from '@remix-run/react';

import { headerBrand, headerRoot } from './header.css';

const Header = ({ children }: { children?: React.ReactNode }) => (
  <header className={headerRoot}>
    <Link to="/" className={headerBrand}>
      FOCUS
    </Link>
    {children}
  </header>
);

export default Header;
