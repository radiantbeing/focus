import { Link } from '@remix-run/react';
import {
  RiBookLine,
  RiBookmarkLine,
  RiHomeLine,
  RiSettingsLine,
} from '@remixicon/react';

import { navItem, navLink, navList, navRoot } from './navbar.css';

const Navbar = () => (
  <nav className={navRoot}>
    <ul className={navList}>
      <li className={navItem}>
        <Link to="/" className={navLink}>
          <RiHomeLine size="1em" />
          대시보드
        </Link>
      </li>
      <li className={navItem}>
        <Link to="/bookmarks" className={navLink}>
          <RiBookmarkLine size="1em" />
          책갈피
        </Link>
      </li>
      <li className={navItem}>
        <Link to="/books" className={navLink}>
          <RiBookLine size="1em" />
          도서
        </Link>
      </li>
      <li className={navItem}>
        <Link to="/settings" className={navLink}>
          <RiSettingsLine size="1em" />
          설정
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
