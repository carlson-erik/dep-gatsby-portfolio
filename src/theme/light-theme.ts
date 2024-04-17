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
      background: "#F3F5F7",
      text: "#1E2127",
      project: {
        iconColor: "#707070",
      },
    },
  },
};

export default LightTheme;
