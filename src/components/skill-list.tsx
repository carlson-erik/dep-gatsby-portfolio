import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "./styled";
import { ThemeContext } from "../theme/context";
import { Theme } from "../theme/types";
/* ------------------ Types ------------------ */
import { AltIconProps, IconProps } from "../images/types";
/* ------------------ Simple Icons ------------------ */
import D3 from "../images/icons/simple/d3";
import Dev from "../images/icons/simple/dev";
import Gmail from "../images/icons/simple/gmail";
import TypeScript from "../images/icons/simple/typescript";
import Redux from "../images/icons/simple/redux";
import JavaScript from "../images/icons/simple/javascript";
import Jest from "../images/icons/simple/jest";
import CSS from "../images/icons/simple/css";
import Gatsby from "../images/icons/simple/gatsby";
import Java from "../images/icons/simple/java";
/* ------------------ Alt Icons ------------------ */
import NodeJS from "../images/icons/alt/nodejs";
import ReactIcon from "../images/icons/alt/react";
import Github from "../images/icons/alt/github";
import Rollup from "../images/icons/simple/rollup";
import Webpack from "../images/icons/simple/webpack";

const Container = styled.div`
  width: 100%;
  display: flex;

  flex-wrap: wrap;
`;

const IconLink = styled(Link)<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme.colors.link.iconHover};
  }
`;

export type AltIconType = "github" | "nodejs" | "react";

export type SimpleIconType =
  | "css"
  | "d3"
  | "dev"
  | "gatsby"
  | "gmail"
  | "java"
  | "javascript"
  | "jest"
  | "typescript"
  | "redux"
  | "rollup"
  | "webpack";

export type IconType = AltIconType | SimpleIconType;

export interface Icon {
  type: IconType;
  color?: string;
  disableLink?: boolean;
}

export interface SimpleIcon extends Icon {
  type: SimpleIconType;
}

export interface AltIcon extends Icon {
  type: AltIconType;
  useAlt?: boolean;
}

export interface SkillListProps {
  skills: (AltIcon | SimpleIcon)[];
}

type SkillLink = {
  component: (props: IconProps | AltIconProps) => JSX.Element;
  title: string;
  url: string;
};

const SIMPLE_ICON_MAP: Record<SimpleIconType, SkillLink> = {
  css: {
    component: CSS,
    title: "CSS3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  d3: {
    component: D3,
    title: "D3.js",
    url: "https://d3js.org/",
  },
  dev: {
    component: Dev,
    title: "dev.to",
    url: "https://dev.to/",
  },
  gatsby: {
    component: Gatsby,
    title: "Gatsby.js",
    url: "https://www.gatsbyjs.com/",
  },
  gmail: {
    component: Gmail,
    title: "Google's gmail",
    url: "https://www.google.com/gmail/about/",
  },
  java: {
    component: Java,
    title: "Oracle Java",
    url: "https://www.java.com/en/",
  },
  javascript: {
    component: JavaScript,
    title: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  jest: {
    component: Jest,
    title: "Jest.js",
    url: "https://jestjs.io/",
  },
  typescript: {
    component: TypeScript,
    title: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  redux: {
    component: Redux,
    title: "Redux.js",
    url: "https://redux.js.org/",
  },
  rollup: {
    component: Rollup,
    title: "rollup.js",
    url: "https://rollupjs.org/",
  },
  webpack: {
    component: Webpack,
    title: "Webpack",
    url: "https://webpack.js.org/",
  },
};

const ALT_ICON_MAP: Record<AltIconType, SkillLink> = {
  github: {
    component: Github,
    title: "Github",
    url: "https://github.com/",
  },
  nodejs: {
    component: NodeJS,
    title: "Node.js",
    url: "https://nodejs.org/en/",
  },
  react: {
    component: ReactIcon,
    title: "React.js",
    url: "https://reactjs.org/",
  },
};

const SkillList = (props: SkillListProps) => {
  const { skills } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <Container>
      {skills.map((skill) => {
        let SkillCompInfo;

        if (Object.keys(ALT_ICON_MAP).includes(skill.type)) {
          SkillCompInfo = ALT_ICON_MAP[skill.type];
        } else {
          SkillCompInfo = SIMPLE_ICON_MAP[skill.type];
        }

        const IconComponent = (
          <SkillCompInfo.component key={skill.type} {...skill} type="dev" />
        );

        if (skill.disableLink) {
          return IconComponent;
        }

        return (
          <IconLink
            key={skill.type}
            href={SkillCompInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            title={SkillCompInfo.title}
            theme={theme}
          >
            {IconComponent}
          </IconLink>
        );
      })}
    </Container>
  );
};

export default SkillList;

export { IconLink };
