import { Theme, ThemeNames } from "./types";

const DarkTheme: Theme = {
  name: ThemeNames.DARK,
  colors: {
    backgroundColor: "#1E2127",
    borderLine: "#343740",
    text: "#D1D4D9",
    link: {
      text: "#70A7F5",
      textHover: "#0F62D7",
      iconHover: "#343740",
    },
  },
};

export default DarkTheme;
