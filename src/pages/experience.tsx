import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
/* ------------------ Components ------------------ */
import Layout from "../components/layout";
import SkillList from "../components/skill-list";
import { Heading } from "../components/styled";
import { ThemeProvider } from "../theme/context";

const Container = styled.div`
  width: 100%;
  padding-bottom: 1.5rem;

  &:last-child {
    padding-bottom: 0;
  }
`;

const DetailContainer = styled.div`
  padding-bottom: 1.5rem;

  &:last-child {
    padding-bottom: 0;
  }
`;

const InformationContainer = styled.div<{ flipFlexDirection: boolean }>`
  padding-left: 1.5rem;
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.flipFlexDirection ? "column" : "row")};
  ${(props) => (!props.flipFlexDirection ? "align-items: center;" : "")}
`;

const SkillsContainer = styled(InformationContainer)`
  padding-top: 0.5rem;
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  flex-basis: 70%;
`;

const Duration = styled.span`
  flex-grow: 1;
  display: flex;
  flex-direction: row-reverse;
  flex-basis: 30%;
`;

const Business = styled.span`
  font-style: italic;
`;

const Location = styled.span`
  margin-left: 0.25rem;
`;

const BulletList = styled.ul`
  margin: 0;
`;

const Label = styled.span`
  margin-right: 0.5rem;
  font-weight: 500;
`;

const SkillListContainer = styled.div`
  flex-grow: 1;
`;

const ExperiencePage = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Helmet>
          <title>Experience | Erik Carlson</title>
          <meta
            name="description"
            content="Erik Carlson's Software Engineering Job Experience"
          />
        </Helmet>
        <Container>
          <Heading>Experience</Heading>
          <DetailContainer>
            <InformationContainer>
              <Title>Senior Software Engineer</Title>
              <Duration>'21 to Now</Duration>
            </InformationContainer>
            <InformationContainer>
              <Business>Pegasystems</Business>
              <Location>(Salem, NH)</Location>
            </InformationContainer>
            <InformationContainer flipFlexDirection>
              <div>
                This role included responsbilities such as the following:
              </div>
              <BulletList>
                <li>
                  Architect and implement new features for Data Visualization
                  software using React, TypeScript and D3.
                </li>
                <li>
                  Interact with customers to remediate issues they're facing
                  with a focus on accuracy and efficiency.
                </li>
                <li>
                  Lead team design/architecture discussions, user story
                  refinement, and other re-occuring Agile planning meetings.
                </li>
              </BulletList>
            </InformationContainer>
            <SkillsContainer>
              <Label>Relevant technology:</Label>
              <SkillListContainer>
                <SkillList
                  skills={[
                    { type: "react" },
                    { type: "typescript" },
                    { type: "d3" },
                    { type: "redux" },
                  ]}
                />
              </SkillListContainer>
            </SkillsContainer>
          </DetailContainer>
          <DetailContainer>
            <InformationContainer>
              <Title>Software Engineer</Title>
              <Duration>'17 to '20</Duration>
            </InformationContainer>
            <InformationContainer>
              <Business>Pegasystems</Business>
              <Location>(Bedford, NH)</Location>
            </InformationContainer>
            <InformationContainer flipFlexDirection>
              <div>
                This role included responsbilities such as the following:
              </div>
              <BulletList>
                <li>
                  Participate in team design discussions, user story refinement,
                  and other re-occuring Agile planning meetings.
                </li>
                <li>
                  Maintain and contribute to company codebase through additional
                  features and bug fixes.
                </li>
                <li>
                  Design and implement Front-End features to be used in Customer
                  Relatonship Management and Business Process Management.
                </li>
              </BulletList>
            </InformationContainer>
            <SkillsContainer>
              <Label>Relevant technology:</Label>
              <SkillListContainer>
                <SkillList
                  skills={[
                    { type: "react" },
                    { type: "javascript" },
                    { type: "d3" },
                    { type: "redux" },
                  ]}
                />
              </SkillListContainer>
            </SkillsContainer>
          </DetailContainer>
          <DetailContainer>
            <InformationContainer>
              <Title>Software Engineer Intern</Title>
              <Duration>Summer '16</Duration>
            </InformationContainer>
            <InformationContainer>
              <Business>Pegasystems</Business>
              <Location>(Bedford, NH)</Location>
            </InformationContainer>
            <InformationContainer flipFlexDirection>
              <div>
                This role included responsbilities such as the following:
              </div>
              <BulletList>
                <li>
                  Participate in team design discussions, user story refinement,
                  and amongst other re-occuring Agile planning meetings.
                </li>
                <li>
                  Maintain and contribute to company codebase through additional
                  features and bug fixes.
                </li>
                <li>
                  Design and implement Front-End features to be used in Customer
                  Relatonship Managmenet and Business Process Management.
                </li>
              </BulletList>
            </InformationContainer>
            <SkillsContainer>
              <Label>Relevant technology:</Label>
              <SkillListContainer>
                <SkillList
                  skills={[
                    { type: "javascript" },
                    { type: "css" },
                    { type: "java" },
                  ]}
                />
              </SkillListContainer>
            </SkillsContainer>
          </DetailContainer>
          <DetailContainer>
            <InformationContainer>
              <Title>IPSec and IKEv2 Technician</Title>
              <Duration>'14 to '16</Duration>
            </InformationContainer>
            <InformationContainer>
              <Business>UNH Interoperability Lab</Business>
              <Location>(Durham, NH)</Location>
            </InformationContainer>
            <InformationContainer flipFlexDirection>
              <div>
                This role included responsbilities such as the following:
              </div>
              <BulletList>
                <li>
                  Create cyber phsyical systems for use in IPv6 test beds.
                </li>
                <li>
                  Perform IPsec Interoperability and Conformance testing on
                  devices using standards set forth by the IETF.
                </li>
                <li>
                  Perform IKEv2 Interoperability and Conformance testing on
                  devices using standards set forth by the IETF.
                </li>
                <li>
                  Participate in committees that manage operation within the
                  company.
                </li>
              </BulletList>
            </InformationContainer>
          </DetailContainer>
        </Container>
        <Container>
          <Heading>Education</Heading>
          <DetailContainer>
            <InformationContainer>
              <Title>B.S. in Computer Science</Title>
              <Duration>'13 to '16</Duration>
            </InformationContainer>
            <InformationContainer>
              <Business>University of New Hampshire</Business>
              <Location>(Durham, NH)</Location>
            </InformationContainer>
          </DetailContainer>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default ExperiencePage;
