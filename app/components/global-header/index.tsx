import { Link } from '@remix-run/react';

import { globalHeaderBrand, globalHeaderRoot } from './global-header.css';

const GlobalHeader = ({ children }: { children?: React.ReactNode }) => (
  <header className={globalHeaderRoot}>
    <Link to="/" className={globalHeaderBrand}>
      FOCUS
    </Link>
    {children}
  </header>
);

export default GlobalHeader;
