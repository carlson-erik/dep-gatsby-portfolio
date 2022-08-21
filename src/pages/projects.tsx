import React, { useContext } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
/* ------------------ Components ------------------ */
import Layout from "../components/layout";
import { Heading, Link, Paragraph } from "../components/styled";
import SkillList from "../components/skill-list";
import { ThemeContext, ThemeProvider } from "../theme/context";
import { Theme } from "../theme/types";

const ProjectRow = styled.div<{ reversed?: boolean }>`
  width: 100%;
  display: flex;

  @media only screen and (max-width: 850px) {
    flex-direction: ${(props) =>
      props.reversed ? "column-reverse" : "column"};
  }
`;

const PictureContainer = styled.div<{ theme: Theme }>`
  flex-basis: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  & .gatsby-image-wrapper {
    width: 85%;
    box-shadow: 5px 3px 6px
      ${(props) => props.theme.colors?.borderLine || "#888888"};
    border: 1px solid ${(props) => props.theme.colors.borderLine || "#888888"};
    border-radius: 0.25rem;
  }
`;

const ContentContainer = styled.div`
  flex-basis: 60%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DetailContainer = styled.div<{ largeContent: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;

  ${(props) =>
    props.largeContent
      ? `
        flex-direction: column;
        align-items: unset;
        & > span {
          padding: 0;
        }
      `
      : ""}
`;

const SkillListContainer = styled.div`
  flex-grow: 1;
`;

const ProjectName = styled.h3`
  font-size: 1.5rem;
`;

const DetailLabel = styled.span`
  padding-right: 0.5rem;
  font-weight: bold;
`;

const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Layout>
      <Helmet>
        <title>Projects | Erik Carlson</title>
        <meta
          name="description"
          content="Software Engineer Erik Carlson's Personal Projects"
        />
      </Helmet>
      <Heading>What I'm Working On</Heading>
      <ProjectRow id="proto-editor">
        <PictureContainer theme={theme}>
          <StaticImage
            src="../images/projects/proto-editor.png"
            alt="ProtoEditor picture"
          />
        </PictureContainer>
        <ContentContainer>
          <ProjectName>ProtoEditor</ProjectName>
          <DetailContainer largeContent>
            <Paragraph>
              ProtoEditor is a solution for developers that need to include rich
              content in their React projects. This component makes it easy for
              someone to add powerful rich content to their React projects
              without having to adopt complex technical debt.
            </Paragraph>
          </DetailContainer>
          <DetailContainer largeContent>
            <DetailLabel>Why Did I Build This?</DetailLabel>
            <Paragraph>
              Like many others, I was working on a project and I needed to add
              rich content to it. Rich content isn't an easy problem to solve
              and often involves lots of hacky solutions. I found myself
              presented with two different solutions:
            </Paragraph>
            <ul>
              <li>
                <DetailLabel>Solution A</DetailLabel>
                <ul>
                  <li>Quick performance (usually)</li>
                  <li>Easy to implment</li>
                  <li>
                    <b>Not</b> feaure rich
                  </li>
                </ul>
              </li>
              <li>
                <DetailLabel>Solution B</DetailLabel>
                <ul>
                  <li>Incredibly complex, but powerful APIs</li>
                  <li>Takes much longer to implement</li>
                  <li>Forces you to solve a project you don't need to</li>
                </ul>
              </li>
            </ul>
            <Paragraph>
              Given these options, I decided that it would be difficult to work
              on creating a complex API.This is something that a large company
              or group of folks should build. I decided that I would make an
              impact for folks looking for a feature rich <b>Solution A</b>.
            </Paragraph>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Website:</DetailLabel>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://protoeditor.com"
            >
              ProtoEditor.com
            </Link>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Repository:</DetailLabel>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              hasIcon
              href="https://github.com/carlson-erik/ProtoEditor.com"
            >
              Github
            </Link>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Relevant tech:</DetailLabel>
            <SkillListContainer>
              <SkillList
                skills={[
                  { type: "react" },
                  { type: "typescript" },
                  { type: "jest" },
                  { type: "rollup" },
                ]}
              />
            </SkillListContainer>
          </DetailContainer>
        </ContentContainer>
      </ProjectRow>
      <Heading>Projects I've Built</Heading>
      <ProjectRow id="coddit">
        <PictureContainer theme={theme}>
          <StaticImage
            src="../images/projects/coddit.png"
            alt="coddit project picture"
          />
        </PictureContainer>
        <ContentContainer>
          <ProjectName>coddit</ProjectName>
          <DetailContainer largeContent>
            <Paragraph>
              Coddit is a web application that renders Reddit as if it were
              code. Coddit allows users to take advantage of features such as
              previewing posts, rendering in different programming languages
              (JavaScript, Python and C#), as well as theming in different color
              schemes. The user has the ability to browse reddit in coddit as
              they would normally browse subreddits and posts.
            </Paragraph>
          </DetailContainer>
          <DetailContainer largeContent>
            <DetailLabel>Why Did I Build This?</DetailLabel>
            <Paragraph>
              Like most redditors, I spend a fair amount of time on reddit. I
              built coddit so that I could browse reddit in a out-of-the-norm
              way and so that I could learn ES6, React.js and related
              technologies.
            </Paragraph>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Website:</DetailLabel>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://coddit.dev/"
            >
              coddit.dev
            </Link>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Repository:</DetailLabel>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              hasIcon
              href="https://github.com/carlson-erik/coddit"
            >
              Github
            </Link>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Relevant tech:</DetailLabel>
            <SkillListContainer>
              <SkillList
                skills={[
                  { type: "react" },
                  { type: "javascript" },
                  { type: "redux" },
                ]}
              />
            </SkillListContainer>
          </DetailContainer>
        </ContentContainer>
      </ProjectRow>
      <ProjectRow id="portfolio">
        <PictureContainer theme={theme}>
          <StaticImage
            src="../images/projects/portfolio.png"
            alt="project template image"
          />
        </PictureContainer>
        <ContentContainer>
          <ProjectName>This Portfolio!</ProjectName>
          <DetailContainer largeContent>
            <Paragraph>
              Using Gatsby and TypeScript, I built the very site you're using
              now. With this site, I want to show off the cool projects that
              I've built and document my learning journey in a blog!
            </Paragraph>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Website:</DetailLabel>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://erikcarlson.dev"
            >
              ErikCarlson.dev
            </Link>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Repository:</DetailLabel>
            <Link
              hasIcon
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/carlson-erik/carlson-erik.github.io"
            >
              Github
            </Link>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Relevant tech:</DetailLabel>
            <SkillListContainer>
              <SkillList
                skills={[
                  { type: "gatsby" },
                  { type: "react" },
                  { type: "typescript" },
                ]}
              />
            </SkillListContainer>
          </DetailContainer>
        </ContentContainer>
      </ProjectRow>
    </Layout>
  );
};

const ProjectsPage = () => {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
};

export default ProjectsPage;
