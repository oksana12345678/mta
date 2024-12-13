import { useLocation } from "react-router";
import Header from "../Header/Header";

interface Props {
  children: React.ReactNode;
}

const SharedLayout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <header className={isHome ? "underline-offset-1" : "uppercase"}>
        <Header />
      </header>
      <main>{children}</main>
    </>
  );
};

export default SharedLayout;
