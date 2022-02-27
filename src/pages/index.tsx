import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
/* ------------------ Components ------------------ */
import Layout from "../components/layout";
import { Heading, GLink, Link } from "../components/styled";

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
`;

const PicturesContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  & .gatsby-image-wrapper {
    width: 45%;
  }

  @media only screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;

    & .gatsby-image-wrapper {
      width: 80%;
    }
  }
`;

const LandingPage = () => {
  return (
    <Layout>
      <Heading>Hey there!</Heading>
      <Paragraph>
        I'm a Full Stack Developer based in New Hampshire, US. I work at{" "}
        <Link href="https://pega.com/">Pegasystems</Link> as a Front-End
        Software Engineer. My job involves building and maintaining{" "}
        <Link href="https://en.wikipedia.org/wiki/Data_visualization">
          Data Visualization
        </Link>{" "}
        Software.
      </Paragraph>
      <Paragraph>
        I specialize in designing and creating Front-end solutions with
        React.js, and TypeScript.
      </Paragraph>
      <Paragraph>
        I'm currently working on{" "}
        <GLink to="/projects#revision-editor">Revision Editor</GLink>. If you
        would like to see more of my work, check out the{" "}
        <GLink to="/projects">rest of my projects.</GLink>
      </Paragraph>
      <Paragraph>
        My wife and I have 3 cats, and a dog that fill our lives with joy.
        Here's a couple of pictures of them:
      </Paragraph>
      <PicturesContainer>
        <StaticImage
          src="../images/personal/elliot.png"
          alt="erik's dog, elliot"
        />
        <StaticImage
          src="../images/personal/macy.jpg"
          alt="erik's cat, macy"
        />
        <StaticImage
          src="../images/personal/bandit-nathaniel.jpg"
          alt="erik's cats, bandit and nathaniel"
        />
      </PicturesContainer>
    </Layout>
  );
};

export default LandingPage;
