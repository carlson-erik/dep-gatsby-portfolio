import React, { ReactNode, useState, createContext } from 'react';
import LightTheme from './light-theme';
import { Theme, ThemeContextType } from './types'


const ThemeContext = createContext<ThemeContextType>({
  theme: LightTheme,
  setTheme: () => {}
});

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const [activeTheme, setActiveTheme] = useState<Theme>(LightTheme);

  return (
    <ThemeContext.Provider 
      value={{
        theme:activeTheme,
        setTheme: setActiveTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeProvider
}