import './global.css';

import type { LinksFunction, MetaFunction } from '@remix-run/node';
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

export const links: LinksFunction = () => {
  return [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '180x180',
      href: '/apple-touch-icon-precomposed.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ];
};

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
