import React from "react";
import styled from 'styled-components';
/* ------------------ Components ------------------ */
import Layout from "../components/layout";

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
`;

const ExperiencePage = () => {
  return (
    <Layout>
      <Heading>Experience</Heading>
      <Paragraph>
        Some experience stuff here
      </Paragraph>
    </Layout>
  );
};

export default ExperiencePage;
