import React, { useContext } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ThemeContext } from "../theme/context";

export default function TemplateImage() {
  const { theme } = useContext(ThemeContext);
  return theme && theme.name === "Dark" ? (
    <StaticImage
      src="../images/projects/dark-project-template.png"
      alt="dark project template image"
    />
  ) : (
    <StaticImage
      src="../images/projects/light-project-template.png"
      alt="light project template image"
    />
  );
}
