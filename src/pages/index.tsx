import { StaticImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
/* ------------------ Components ------------------ */
import Layout from "../components/layout";
import { Heading, Link } from "../components/styled";
import { Link as GLink } from "gatsby";
import { ThemeProvider } from "../theme/context";

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
  padding-bottom: 1rem;

  &:last-child {
    padding-bottom: 0;
  }
`;

const LandingPage = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Helmet>
          <title>Home | Erik Carlson</title>
          <meta
            name="description"
            content="Software Engineer Erik Carlson's Portfolio Home Page"
          />
        </Helmet>
        <Heading>Hi there!</Heading>
        <Paragraph>
          I'm a Full Stack Developer based in New Hampshire, US. I work at{" "}
          <Link href="https://pega.com/" target="_blank">
            Pegasystems
          </Link>{" "}
          as a Senior Software Engineer. At Pegasystems, I build{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Data_visualization"
            target="_blank"
          >
            Data Visualization
          </Link>{" "}
          and{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Data_reporting"
            target="_blank"
          >
            Data Reporting
          </Link>{" "}
          Software.
        </Paragraph>
        <Paragraph>
          I specialize in designing and creating Front-end solutions with
          React.js, and TypeScript.
        </Paragraph>
        <Paragraph>
          I'm currently working on{" "}
          <GLink to="/projects#proto-editor">ProtoEditor</GLink>. If you would
          like to see more of my work, check out the{" "}
          <GLink to="/projects">rest of my projects.</GLink>
        </Paragraph>
        <Paragraph>
          I have experience as a Software Engineer, you can checkout{" "}
          <GLink to="/experience">where I've worked!</GLink>
        </Paragraph>
        <Paragraph>
          My wife and I have a horse, 3 cats, a dog, and 12 chickens that fill
          our lives! I'm always happy to talk about our pets!
        </Paragraph>
      </Layout>
    </ThemeProvider>
  );
};

export default LandingPage;
