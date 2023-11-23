import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
/* ------------------ Components ------------------ */
import Layout from "../components/layout";
import ProjectList from "../components/project-list";
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

const Introduction = styled.section`
  margin-bottom 2rem;:
`;

const LandingPage = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Helmet>
          <title>Home | Erik Carlson</title>
          <meta
            name="description"
            content="Erik Carlson's Software Engineering Portfolio Home Page"
          />
        </Helmet>
        <Introduction>
          <Heading>Hi there!</Heading>
          <Paragraph>
            I'm a Full Stack Software Engineer based out of Maine, US. I work at{" "}
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
            React.js, and TypeScript. I have expertise in building backend/server
            technologies. I like to build cool things and learn from the experience.
          </Paragraph>
          <Paragraph>
            By now you're saying,{" "}
            <em>"Hey, can this guy actually do what he says?"</em> My projects
            and <GLink to="/experience">past work experience</GLink>{" "}
            speak for themselves!
          </Paragraph>
        </Introduction>
        <ProjectList />
      </Layout>
    </ThemeProvider>
  );
};

export default LandingPage;
