import {ReactNode} from "react";
import {Outlet} from "react-router-dom";
import TopMenu from "../TopMenu/TopMenu.tsx";
import Footer from "../Footer/Footer.tsx";
import {css} from "@emotion/react";
import {ThemeProvider, useTheme} from "../../contexts/ThemeContext/ThemeContext.tsx";

const Layout = ({children}: { children?: ReactNode }) => {

  return (
    <ThemeProvider>
      <ThemedLayout>{children !== undefined ? children : <Outlet/>}</ThemedLayout>
    </ThemeProvider>
  );

  function ThemedLayout({children}: { children?: React.ReactNode }) {
    const {theme} = useTheme();

    return (
      <>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            //height: 100%;
            background-color: ${theme.background};
            color: ${theme.textColor};
            transition: background-color 0.3s ease, color 0.3s ease;
          `}
        >
          <TopMenu/>
          <div
            css={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              position: relative;
            `}
          >
            {children !== undefined ? children : <Outlet />}
          </div>
          {theme.darkTheme && <Footer/>}
        </div>
      </>
    );
  }
};

export default Layout;
