import React, { useState, createContext, useEffect } from "react";
import LightTheme from "./light-theme";
import DarkTheme from "./dark-theme";
import { Theme, ThemeContextType, ThemeNames } from "./types";

const useThemeDetector = () => {
  const getCurrentTheme = () => {
    if (typeof window === 'undefined') {
      return false;
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    }
  };
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e => {
    setIsDarkTheme(e.matches);
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener('change', mqListener);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);
  return isDarkTheme;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: LightTheme,
  setTheme: () => { },
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
  const isUserOSDarkTheme = useThemeDetector();
  const [activeTheme, setActiveTheme] = useState<Theme>();

  useEffect(() => {
    if (!activeTheme) {
      const storedThemeName = window.sessionStorage.getItem(
        "erikcarlson.dev-theme-name"
      );
      if (storedThemeName) {
        // This site has already loaded before and/or the user has changed the theme manually.
        // Use the stored theme.
        setActiveTheme(storedThemeName === ThemeNames.LIGHT ? LightTheme : DarkTheme);
      } else if (isUserOSDarkTheme) {
        // Match the User's Operating System by setting to Dark mode
        setActiveTheme(DarkTheme)
        window.sessionStorage.setItem("erikcarlson.dev-theme-name", DarkTheme.name)
      } else {
        // Default to Light Theme
        setActiveTheme(LightTheme)
        window.sessionStorage.setItem("erikcarlson.dev-theme-name", LightTheme.name)
      }
    }
  }, [activeTheme, isUserOSDarkTheme]);

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
