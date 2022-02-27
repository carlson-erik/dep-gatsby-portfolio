export type Theme = {
    id: string;
    name: string;
    colors: {}
  }
  
  export enum ThemeNames {
    LIGHT = 'Light',
    DARK = 'Dark'
  }
  
  export type ThemeContextType = {
    theme: Theme,
    setTheme: (newTheme: Theme) => void;
  }