import React, { useContext } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
/* ------------------ Components ------------------ */
import { Heading, Link, Paragraph } from "../components/styled";
import SkillList, { IconLink } from "../components/skill-list";
import { ThemeContext } from "../theme/context";
import { Theme } from "../theme/types";
import Github from "../images/icons/alt/github";
import ExternalLink from "../images/icons/simple/external-link";

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

  @media only screen and (max-width: 625px) {
    width: 100%;
    flex-basis: 100%;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
`;

const ProjectLinks = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
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
  gap: 1rem;
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
            {theme.name === "Light" ? (
              <StaticImage
                src="../images/projects/elastic-editor-light.png"
                alt="ElasticEditor picture"
              />
            ) : (
              <StaticImage
                src="../images/projects/elastic-editor-dark.png"
                alt="ElasticEditor picture"
              />
            )}
          </PictureContainer>
          <ContentContainer>
            <ProjectHeader>
              <ProjectName>ElasticEditor</ProjectName>
              <ProjectLinks>
                <IconLink
                  key="project-github"
                  href="https://github.com/carlson-erik/elastic-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="ElasticEditor github repo"
                  theme={theme}
                >
                  {
                    <Github
                      type="dev"
                      useAlt={false}
                      color={theme.colors.projectList.project.iconColor}
                    />
                  }
                </IconLink>
              </ProjectLinks>
            </ProjectHeader>
            <DetailContainer largeContent>
              <Paragraph>
                ElasticEditor allows developers to include modifiable rich
                content in their React projects. At the core of ElasticEditor is
                a customizable editor. This editor allows you to easily create,
                save, and export your content into other formats for usage
                elsewhere.
              </Paragraph>
            </DetailContainer>
            <DetailContainer>
              <DetailLabel>Technologies:</DetailLabel>
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
        <Heading>Past Projects</Heading>
        <ProjectContainer>
          <Project id="coddit" theme={theme}>
            <ProjectHeader>
              <ProjectName>coddit</ProjectName>
              <ProjectLinks>
                <IconLink
                  key="project-github"
                  href="https://github.com/carlson-erik/coddit"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="coddit github repo"
                  theme={theme}
                >
                  {
                    <Github
                      type="dev"
                      useAlt={false}
                      color={theme.colors.projectList.project.iconColor}
                    />
                  }
                </IconLink>
                <IconLink
                  key="project-website"
                  href="https://coddit.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="coddit website"
                  theme={theme}
                >
                  {
                    <ExternalLink
                      type="dev"
                      color={theme.colors.projectList.project.iconColor}
                    />
                  }
                </IconLink>
              </ProjectLinks>
            </ProjectHeader>
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
              <DetailLabel>Technologies:</DetailLabel>
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
          <Project id="componentry" theme={theme}>
            <ProjectHeader>
              <ProjectName>Componentry</ProjectName>
              <ProjectLinks>
                <IconLink
                  key="project-github"
                  href="https://github.com/carlson-erik/componentry"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="componentry github repo"
                  theme={theme}
                >
                  {
                    <Github
                      type="dev"
                      useAlt={false}
                      color={theme.colors.projectList.project.iconColor}
                    />
                  }
                </IconLink>
              </ProjectLinks>
            </ProjectHeader>
            <DetailContainer largeContent>
              <Paragraph>
                Often I come across interesting React Component ideas on design
                websites. When I find something that challenges or inspires me,
                I instantly think "I need to build that!" When I actually build
                the component, I store it in this project.
              </Paragraph>
            </DetailContainer>
            <DetailContainer>
              <DetailLabel>Technologies:</DetailLabel>
              <SkillListContainer>
                <SkillList
                  skills={[
                    { type: "react" },
                    { type: "javascript" },
                    { type: "typescript" },
                  ]}
                />
              </SkillListContainer>
            </DetailContainer>
          </Project>
          <Project id="site-building" theme={theme}>
            <ProjectHeader>
              <ProjectName>Site Building</ProjectName>
              <ProjectLinks>
                <IconLink
                  key="project-github"
                  href="https://github.com/carlson-erik/site-building"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="site-building github repo"
                  theme={theme}
                >
                  {
                    <Github
                      type="dev"
                      useAlt={false}
                      color={theme.colors.projectList.project.iconColor}
                    />
                  }
                </IconLink>
              </ProjectLinks>
            </ProjectHeader>
            <DetailContainer largeContent>
              <Paragraph>
                Often I come across interesting Website ideas on design
                websites. When I find something that challenges or inspires me,
                I instantly think "I need to build that!" When I actually build
                the website, I store it in this project.
              </Paragraph>
            </DetailContainer>
            <DetailContainer>
              <DetailLabel>Technologies:</DetailLabel>
              <SkillListContainer>
                <SkillList
                  skills={[
                    { type: "react" },
                    { type: "javascript" },
                    { type: "typescript" },
                  ]}
                />
              </SkillListContainer>
            </DetailContainer>
          </Project>
          <Project id="portfolio" theme={theme}>
            <ProjectHeader>
              <ProjectName>This Portfolio!</ProjectName>
              <ProjectLinks>
                <IconLink
                  key="project-github"
                  href="https://github.com/carlson-erik/carlson-erik.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="componentry github repo"
                  theme={theme}
                >
                  {
                    <Github
                      type="dev"
                      useAlt={false}
                      color={theme.colors.projectList.project.iconColor}
                    />
                  }
                </IconLink>
              </ProjectLinks>
            </ProjectHeader>
            <DetailContainer largeContent>
              <Paragraph>
                Using Gatsby and TypeScript, I built the very site you're using
                now. With this site, I want to show off the cool projects that
                I've built and document my learning journey in a blog!
              </Paragraph>
            </DetailContainer>
            <DetailContainer>
              <DetailLabel>Technologies:</DetailLabel>
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
