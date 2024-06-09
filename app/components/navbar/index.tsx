import { Link } from "@remix-run/react";

import { navItem, navLink, navList, navRoot } from "./navbar.css";

const Navbar = () => (
  <nav className={navRoot}>
    <ul className={navList}>
      <li className={navItem}>
        <Link to="/" className={navLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M14 21C13.4477 21 13 20.5523 13 20V12C13 11.4477 13.4477 11 14 11H20C20.5523 11 21 11.4477 21 12V20C21 20.5523 20.5523 21 20 21H14ZM4 13C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5523 10.5523 13 10 13H4ZM9 11V5H5V11H9ZM4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 3.44772 15 4 15H10C10.5523 15 11 15.4477 11 16V20C11 20.5523 10.5523 21 10 21H4ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V4ZM15 5V7H19V5H15Z"></path>
          </svg>
          대시보드
        </Link>
      </li>
      <li className={navItem}>
        <Link to="/bookmarks" className={navLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path>
          </svg>
          책갈피
        </Link>
      </li>
      <li className={navItem}>
        <Link to="/books" className={navLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M21 18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H21V22H6C4.34315 22 3 20.6569 3 19V4C3 2.89543 3.89543 2 5 2H21V18ZM5 16.05C5.16156 16.0172 5.32877 16 5.5 16H19V4H5V16.05ZM16 9H8V7H16V9Z"></path>
          </svg>
          도서
        </Link>
      </li>
      <li className={navItem}>
        <Link to="/settings" className={navLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"></path>
          </svg>
          설정
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
