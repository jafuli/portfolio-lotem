import {createContext, useContext, useEffect, useState, ReactNode} from "react";
import {matchPath, useLocation} from "react-router-dom";

// Define theme structure
interface Theme {
  background: string;
  textColor: string;
  darkTheme: boolean;
}

// Theme definitions
const darkTheme: Theme = {
  background: "#070908",
  textColor: "#ffffff",
  darkTheme: true
};

const lightTheme: Theme = {
  background: "#ffffff",
  textColor: "#070908",
  darkTheme: false
};

// Theme context type
interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

// ThemeProvider component
export const ThemeProvider = ({children}: { children: ReactNode }) => {
  const location = useLocation();
  const [theme, setTheme] = useState<Theme>(darkTheme);

  useEffect(() => {
    // If the current route starts with "/works", use the light theme
    // setTheme(location.pathname.startsWith("/works/") ? lightTheme : darkTheme);
    const isLightTheme =
      matchPath({path: "/works/*", end: false}, location.pathname) !== null
      &&
      location.pathname !== "/works/"
      &&
      location.pathname !== "/works";
    // console.log(matchPath({path: "/works/*", end: false}, location.pathname));
    // const a = matchPath({path: "/works/*", end: false}, location.pathname);
    // console.log(a?.pattern)
    // console.log(isLightTheme);
    setTheme(isLightTheme ? lightTheme : darkTheme);
  }, [location.pathname]);

  return <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>;
};
