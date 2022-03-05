import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
/* ------------------ Components ------------------ */
import Layout from "../components/layout";
import { Heading, Link, Paragraph } from "../components/styled";
import IconList from "../components/icon-list";
import { ThemeProvider } from "../theme/context";

const ProjectRow = styled.div<{ reversed?: boolean }>`
  width: 100%;
  display: flex;

  @media only screen and (max-width: 850px) {
    flex-direction: ${(props) =>
      props.reversed ? "column-reverse" : "column"};
  }
`;

const PictureContainer = styled.div`
  flex-basis: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  & .gatsby-image-wrapper {
    width: 85%;
    box-shadow: 5px 3px 6px #888888;
  }

  @media only screen and (max-width: 850px) and (min-width: 500px) {
    & .gatsby-image-wrapper {
      width: 50%;
    }
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

const IconListContainer = styled.div`
  flex-grow: 1;
`;

const ProjectName = styled.h3`
  font-size: 1.5rem;
`;

const DetailLabel = styled.span`
  padding-right: 0.5rem;
  font-weight: 700;
`;

const ProjectsPage = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Helmet>
          <title>Projects | Erik Carlson</title>
          <meta
            name="description"
            content="Software Engineer Erik Carlson's Personal Projects"
          />
        </Helmet>
        <Heading>What I'm Working On</Heading>
        <ProjectRow id="revision-editor">
          <PictureContainer>
            <StaticImage
              src="../images/projects/project-temporary.png"
              alt="project template image"
            />
          </PictureContainer>
          <ContentContainer>
            <ProjectName>Revision Editor</ProjectName>
            <DetailContainer largeContent>
              <Paragraph>
                Revision Editor is a rich text Editor React Component that
                handles all the rendering and editing for rich text content
                represented as JSON. The goal for this project is to make a
                component that a user can plug into their application with
                little to no configuration and have a powerful RTE experience.
              </Paragraph>
            </DetailContainer>
            <DetailContainer largeContent>
              <DetailLabel>Why Did I Build This?</DetailLabel>
              <Paragraph>
                While working on other projects, I've bumped into the complex
                problem that is rich text. From editing to storing to rendering
                it, rich text content is a difficult problem for all Web
                Developers. Some solutions involve editing the DOM and storing
                HTML in the database. I wanted to solve this in React and make
                it easy for React Developers to enable their users to create
                rich text content.
              </Paragraph>
            </DetailContainer>
            <DetailContainer>
              <DetailLabel>Repository:</DetailLabel>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                hasIcon
                href="https://github.com/carlson-erik/rt-editor"
              >
                Github
              </Link>
            </DetailContainer>
            <DetailContainer>
              <DetailLabel>Technologies used:</DetailLabel>
              <IconListContainer>
                <IconList
                  icons={[
                    { type: "react", useAlt: false },
                    { type: "typescript" },
                  ]}
                />
              </IconListContainer>
            </DetailContainer>
          </ContentContainer>
        </ProjectRow>
        <Heading>Projects I've Built</Heading>
        <ProjectRow id="coddit">
          <PictureContainer>
            <StaticImage
              src="../images/projects/coddit.png"
              alt="coddit project picture"
            />
          </PictureContainer>
          <ContentContainer>
            <ProjectName>Coddit</ProjectName>
            <DetailContainer largeContent>
              <Paragraph>
                Coddit is a web application that renders Reddit as if it were
                code. Coddit allows users to take advantage of features such as
                previewing posts, rendering in different programming languages
                (JavaScript, Python and C#), as well as theming in different
                color schemes. The user has the ability to browse reddit in
                coddit as they would normally browse subreddits and posts.
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
              <DetailLabel>Live link:</DetailLabel>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="http://coddit.dev/"
              >
                Coddit.dev
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
              <DetailLabel>Technologies used:</DetailLabel>
              <IconListContainer>
                <IconList
                  icons={[
                    { type: "react", useAlt: false },
                    { type: "redux" },
                    { type: "javascript" },
                  ]}
                />
              </IconListContainer>
            </DetailContainer>
          </ContentContainer>
        </ProjectRow>
        <ProjectRow id="portfolio">
          <PictureContainer>
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
              <DetailLabel>Live link:</DetailLabel>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="http://erikcarlson.dev"
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
              <DetailLabel>Technologies used:</DetailLabel>
              <IconListContainer>
                <IconList
                  icons={[
                    { type: "react", useAlt: false },
                    { type: "gatsby" },
                    { type: "typescript" },
                  ]}
                />
              </IconListContainer>
            </DetailContainer>
          </ContentContainer>
        </ProjectRow>
      </Layout>
    </ThemeProvider>
  );
};

export default ProjectsPage;
