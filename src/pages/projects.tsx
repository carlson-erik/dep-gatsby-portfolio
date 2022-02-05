import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
/* ------------------ Components ------------------ */
import Layout from "../components/layout";
import { Link } from "../components/styled";
import IconList from "../components/icon-list";
import Github from "../images/icons/alt/github";

const Paragraph = styled.p`
  line-height: 1.5rem;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
`;

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
    <Layout>
      <Heading>What I'm Working On</Heading>
      <ProjectRow id="revision-editor">
        <PictureContainer>
          <StaticImage
            src="../images/projects/project-temporary-green.png"
            alt=""
          />
        </PictureContainer>
        <ContentContainer>
          <ProjectName>Revision Editor</ProjectName>
          <DetailContainer largeContent>
            <Paragraph>
              Project Description content here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut in sollicitudin elit, faucibus
              egestas lacus. Vivamus cursus nunc vel ipsum scelerisque
              porttitor. Aenean a consectetur dolor, sed sodales purus. Donec
              vel ornare nunc.
            </Paragraph>
          </DetailContainer>
          <DetailContainer largeContent>
            <DetailLabel>Why Did I Build This?</DetailLabel>
            <Paragraph>
              Motivation for project content here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut in sollicitudin elit, faucibus
              egestas lacus. Vivamus cursus nunc vel ipsum scelerisque
              porttitor. Aenean a consectetur dolor, sed sodales purus. Donec
              vel ornare nunc.
            </Paragraph>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Live link:</DetailLabel>
            <Link href="https://github.com/carlson-erik/rt-editor">
              revision-editor.io
            </Link>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Repository:</DetailLabel>
            <Link hasIcon href="https://github.com/carlson-erik/rt-editor">
              <Github type="social" />
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
            <DetailLabel>Live link:</DetailLabel>
            <Link href="http://coddit.dev/">Coddit.dev</Link>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Repository:</DetailLabel>
            <Link hasIcon href="https://github.com/carlson-erik/coddit">
              <Github type="social" />
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
            src="../images/projects/project-temporary-blue.png"
            alt="blue project template image"
          />
        </PictureContainer>
        <ContentContainer>
          <ProjectName>This Portfolio!</ProjectName>
          <DetailContainer largeContent>
            <Paragraph>
              Project Description content here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut in sollicitudin elit, faucibus
              egestas lacus. Vivamus cursus nunc vel ipsum scelerisque
              porttitor. Aenean a consectetur dolor, sed sodales purus. Donec
              vel ornare nunc.
            </Paragraph>
          </DetailContainer>
          <DetailContainer largeContent>
            <DetailLabel>Why Did I Build This?</DetailLabel>
            <Paragraph>
              Motivation for project content here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut in sollicitudin elit, faucibus
              egestas lacus. Vivamus cursus nunc vel ipsum scelerisque
              porttitor. Aenean a consectetur dolor, sed sodales purus. Donec
              vel ornare nunc.
            </Paragraph>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Live link:</DetailLabel>
            <Link href="http://erikcarlson.dev">ErikCarlson.dev</Link>
          </DetailContainer>
          <DetailContainer>
            <DetailLabel>Repository:</DetailLabel>
            <Link hasIcon href="https://github.com/carlson-erik/carlson-erik.github.io">
              <Github type="social" />
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
  );
};

export default ProjectsPage;
