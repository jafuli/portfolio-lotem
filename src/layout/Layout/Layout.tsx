import {ReactNode} from "react";
import {Outlet} from "react-router-dom";
import TopMenu from "../TopMenu/TopMenu.tsx";
import Footer from "../Footer/Footer.tsx";

const Layout = ({children}: { children?: ReactNode }) => {
  return (
    <>
      <TopMenu/>
      {children !== undefined ? children : <Outlet/>}
      <Footer/>
    </>
  );
};

export default Layout;
