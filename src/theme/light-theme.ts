import { Theme, ThemeNames } from "./types";

const LightTheme: Theme = {
  name: ThemeNames.LIGHT,
  colors: {
    backgroundColor: "#FFFFFF",
    borderLine: "#E5E8EC",
    text: "#1E2127",
    link: {
      text: "#1f5aff",
      textHover: "#0036cc",
      iconHover: "#E5E8EC",
    },
    projectList: {
      background: "#EFF2F4",
      text: "#1E2127",
    },
  },
};

export default LightTheme;
