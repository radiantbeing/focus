import { mainStyle } from './main.css';

const Main = ({ children }: { children: React.ReactNode }) => (
  <main className={mainStyle}>{children}</main>
);

export { Main };
