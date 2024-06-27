import { Link } from '@remix-run/react';
import {
  RiBookLine,
  RiBookmarkLine,
  RiHomeLine,
  RiSettingsLine,
} from '@remixicon/react';

import { itemStyle, linkStyle, listStyle, navStyle } from './navbar.css';

const Navbar = () => (
  <nav className={navStyle}>
    <ul className={listStyle}>
      <li className={itemStyle}>
        <Link to="/" className={linkStyle}>
          <RiHomeLine size="1em" />
          대시보드
        </Link>
      </li>
      <li className={itemStyle}>
        <Link to="/bookmarks" className={linkStyle}>
          <RiBookmarkLine size="1em" />
          책갈피
        </Link>
      </li>
      <li className={itemStyle}>
        <Link to="/books" className={linkStyle}>
          <RiBookLine size="1em" />
          도서
        </Link>
      </li>
      <li className={itemStyle}>
        <Link to="/settings" className={linkStyle}>
          <RiSettingsLine size="1em" />
          설정
        </Link>
      </li>
    </ul>
  </nav>
);

export { Navbar };
