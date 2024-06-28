import './global.css';

import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import { Header } from './components/header';
import { Main } from './components/main';
import { Navbar } from './components/navbar';

export const meta: MetaFunction = () => [{ title: 'FOCUS' }];

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
    </body>
  </html>
);

const App = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Navbar />
  </>
);

export default App;
