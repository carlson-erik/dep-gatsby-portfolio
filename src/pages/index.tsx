import React from "react";
import styled from 'styled-components';
/* ------------------ Components ------------------ */
import Layout from "../components/layout";
import { GLink, Link } from "../components/styled";

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
`;

const LandingPage = () => {
  return (
    <Layout>
      <Heading>Hey there!</Heading>
      <Paragraph>
        I'm a Full Stack Developer based in New Hampshire, US. I work at{" "}
        <Link href="https://pega.com/">Pegasystems</Link> as a Software Engineer where
        we build innovative BPM software.
      </Paragraph>
      <Paragraph>
        I specialize in designing and creating Front-end solutions with
        React.js, and TypeScript.
      </Paragraph>
      <Paragraph>
        I'm currently working on <GLink to="/projects#revision-editor">Revision Editor</GLink>. If you
        would like to see more of my work, check out the{" "}
        <GLink to="/projects">rest of my projects.</GLink>
      </Paragraph>
      <Paragraph>
        I recently started a blog. <GLink to="/blog">Check it out!</GLink>
      </Paragraph>
    </Layout>
  );
};

export default LandingPage;
