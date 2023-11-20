import React, { useContext } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
/* ------------------ Components ------------------ */
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
  flex-basis: 50%;
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
  flex-basis: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Project = styled.div<{ theme: Theme }>`
  flex-basis: calc(50% - 1rem);
  height: fit-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.colors.projectList.background};
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

const ProjectContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProjectSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProjectList = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ProjectSectionContainer>
      <Section>
        <Heading>What I'm Working On</Heading>
        <ProjectRow id="elastic-editor">
          <PictureContainer theme={theme}>
            <StaticImage
              src="../images/projects/elastic-editor.png"
              alt="ElasticEditor picture"
            />
          </PictureContainer>
          <ContentContainer>
            <ProjectName>ElasticEditor</ProjectName>
            <DetailContainer largeContent>
              <Paragraph>
                ElasticEditor is a solution for developers that need to include
                rich content in their React projects. This component makes it
                easy for someone to add powerful rich content to their React
                projects without having to adopt complex technical debt.
              </Paragraph>
            </DetailContainer>
            <DetailContainer>
              <DetailLabel>Website:</DetailLabel>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://elastic-editor.com"
              >
                elastic-editor.com
              </Link>
            </DetailContainer>
            <DetailContainer>
              <DetailLabel>Repository:</DetailLabel>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                hasIcon
                href="https://github.com/carlson-erik/elastic-editor"
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
      </Section>
      <Section>
        <Heading>Projects I've Built</Heading>
        <ProjectContainer>
          <Project id="coddit" theme={theme}>
            <ProjectName>coddit</ProjectName>
            <DetailContainer largeContent>
              <Paragraph>
                Coddit is a web application that renders Reddit as if it were
                code. Coddit allows users to take advantage features such as
                previewing posts, rendering in different programming languages
                (JavaScript, Python and C#), as well as theming in different
                color schemes. The user has the ability to browse reddit in
                coddit as they would normally browse subreddits and posts.
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
          </Project>
          <Project id="portfolio1" theme={theme}>
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
          </Project>
          <Project id="portfolio2" theme={theme}>
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
          </Project>
          <Project id="portfolio3" theme={theme}>
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
          </Project>
        </ProjectContainer>
      </Section>
    </ProjectSectionContainer>
  );
};

export default ProjectList;
