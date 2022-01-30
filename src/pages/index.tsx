import React from "react";
import styled from 'styled-components';
/* ------------------ Components ------------------ */
import Layout from "../components/layout";

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
`;

const Link = styled.a`
  color: #1f5aff;
  &:hover {
    color: #0036CC;
  }
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
        I'm currently working on <Link href="#rt-editor">RT-Editor</Link>. If you
        would like to see more of my work, check out the{" "}
        <Link href="#projects">rest of my projects.</Link>
      </Paragraph>
      <Paragraph>
        I recently started blogging. <Link href="#blog">Check it out!</Link>
      </Paragraph>
    </Layout>
  );
};

export default LandingPage;
