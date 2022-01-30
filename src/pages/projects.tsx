import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
/* ------------------ Components ------------------ */
import Layout from "../components/layout";

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
`;

const ProjectRow = styled.div<{reversed?: boolean}>`
  width: 100%;
  display:flex;
  padding-bottom: 1rem;

  @media only screen and (max-width: 950px) {
    flex-direction: ${props => props.reversed ? 'column-reverse' : 'column'};
  }
`;

const PictureContainer = styled.div`
  flex-basis: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  & .gatsby-image-wrapper {
    width: 75%;
    box-shadow: 5px 3px 6px #888888;
  }

  @media only screen and (max-width: 950px) and (min-width: 400px) {
    & .gatsby-image-wrapper {
      width: 50%;
    }
  }
`;

const ContentContainer = styled.div`
  flex-basis: 60%;
  padding: 1rem;
`;

const ProjectsPage = () => {
  return (
    <Layout>
      <Heading>What I'm Building</Heading>
      <ProjectRow>
        <PictureContainer>
          <StaticImage 
            src='../images/projects/coddit.png'
            alt='erik carlson portfolio picture'
          />
        </PictureContainer>
        <ContentContainer>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Paragraph>
        </ContentContainer>
      </ProjectRow>
      <ProjectRow reversed>
        <ContentContainer>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Paragraph>
        </ContentContainer>
        <PictureContainer>
          <StaticImage 
            src='../images/projects/coddit.png'
            alt='erik carlson portfolio picture'
          />
        </PictureContainer>
      </ProjectRow>
      <Heading>Projects I've Built</Heading>
      <Paragraph>Some projects stuff here</Paragraph>
    </Layout>
  );
};

export default ProjectsPage;
