export type Theme = {
  name: string;
  colors: {
    backgroundColor: string;
    borderLine: string;
    text: string;
    link: {
      text: string;
      textHover: string;
      iconHover: string;
    };
    projectList: {
      background: string;
      text: string;
      project: {
        iconColor: string;
      };
    };
  };
};

export enum ThemeNames {
  LIGHT = "Light",
  DARK = "Dark",
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
};
