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
      iconHover: "#434651",
    },
    projectList: {
      background: "#343740",
      text: "#D1D4D9",
      project: {
        iconColor: "lightgrey",
      },
    },
  },
};

export default DarkTheme;
