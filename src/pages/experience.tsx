import React from "react";
import styled from "styled-components";
/* ------------------ Components ------------------ */
import Layout from "../components/layout";
import { Heading, Paragraph } from "../components/styled";

const EducationContainer = styled.div``;

const DegreeInformation = styled.div`
  display: flex;
  width: 100%;
`;

const DegreeTitle = styled.span`
  font-weight: 500;
`;

const DegreeDuration = styled.span`
  flex-grow:1;
  display: flex;
  flex-direction: row-reverse;
`;

const SchoolName = styled.span`
  font-style: italic;
`;

const ExperiencePage = () => {
  return (
    <Layout>
      <Heading>Experience</Heading>

      <Heading>Education</Heading>
      <EducationContainer>
        <DegreeInformation>
          <DegreeTitle>B.S. in Computer Science</DegreeTitle>
          <DegreeDuration>2013-2017</DegreeDuration>
        </DegreeInformation>
        <SchoolName>University of New Hampshire</SchoolName>
      </EducationContainer>
    </Layout>
  );
};

export default ExperiencePage;
