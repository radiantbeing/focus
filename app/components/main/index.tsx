import { main } from './main.css';

const Main = ({ children }: { children: React.ReactNode }) => (
  <main className={main}>{children}</main>
);

export default Main;
