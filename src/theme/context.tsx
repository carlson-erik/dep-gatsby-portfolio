import React, { useState, createContext, useEffect } from "react";
import LightTheme from "./light-theme";
import DarkTheme from "./dark-theme";
import { Theme, ThemeContextType, ThemeNames } from "./types";

const ThemeContext = createContext<ThemeContextType>({
  theme: LightTheme,
  setTheme: () => {},
});

interface ThemeProviderProps {
  children?: React.ReactNode;
}

function getTimeAwareTheme(): Theme {
  const currentHour = new Date().getHours();
  if (currentHour < 7 || currentHour > 17) {
    return DarkTheme;
  }
  return LightTheme;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const [activeTheme, setActiveTheme] = useState<Theme>();

  useEffect(() => {
    if (!activeTheme) {
      const storedThemeName = window.sessionStorage.getItem(
        "erikcarlson.dev-theme-name"
      );
      if (storedThemeName) {
        if (storedThemeName === ThemeNames.LIGHT) {
          setActiveTheme(LightTheme);
        } else {
          setActiveTheme(DarkTheme);
        }
      } else {
        const theme = getTimeAwareTheme();
        setActiveTheme(theme);
        window.sessionStorage.setItem("erikcarlson.dev-theme-name", theme.name);
      }
    }
  }, [activeTheme]);

  if (!activeTheme) return null;

  return (
    <ThemeContext.Provider
      value={{
        theme: activeTheme,
        setTheme: setActiveTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
