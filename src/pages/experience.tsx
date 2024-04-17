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

const InformationContainer = styled.div<{
  flipFlexDirection: boolean;
  noPadding: boolean;
}>`
  padding-left: ${(props) => (props.noPadding ? "" : "1.5rem")};
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.flipFlexDirection ? "column" : "row")};
  ${(props) => (!props.flipFlexDirection ? "align-items: center;" : "")}
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
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
            content="Erik Carlson's Software Engineering Job Experience and Education"
          />
        </Helmet>
        <Container>
          <Heading>Job Experience</Heading>
          <DetailContainer>
            <InformationContainer noPadding>
              <Title>Principal Software Engineer</Title>
              <Duration>'24 - Present</Duration>
            </InformationContainer>
            <InformationContainer>
              <Business>Pegasystems</Business>
              <Location>(Remote)</Location>
            </InformationContainer>
            <InformationContainer flipFlexDirection>
              <div>
                This role includes responsbilities such as the following:
              </div>
              <BulletList>
                <li>
                  Architect and oversee the implementation of features by a
                  team.
                </li>
                <li>
                  Plan, implement and write automated tests for features in
                  Enterprise Data Visualization software.
                </li>
                <li>
                  Mentor teammates in topics ranging from Technical/Engineering
                  skills to the Software Development Life Cycle process.
                </li>
                <li>
                  Lead team technical/design discussions, user story refinement,
                  and other re-occuring Agile planning meetings.
                </li>
                <li>
                  Interact with customers to remediate issues they're facing
                  with a focus on accuracy and efficiency.
                </li>
              </BulletList>
            </InformationContainer>
            <InformationContainer flipFlexDirection>
              <Label>Security Champion</Label>
              <BulletList>
                <li>
                  Continuing education of modern Security practices and new
                  vulnerabilities.
                </li>
                <li>
                  Mentor teammates and other teams on security best practices
                  and related topics.
                </li>
                <li>
                  Investigate and implement fixes for security vulnerabilities.
                </li>
              </BulletList>
            </InformationContainer>
            <InformationContainer>
              <Label>Relevant technologies:</Label>
              <SkillListContainer>
                <SkillList
                  skills={[
                    { type: "typescript" },
                    { type: "javascript" },
                    { type: "react" },
                    { type: "d3" },
                    { type: "jest" },
                    { type: "java" },
                  ]}
                />
              </SkillListContainer>
            </InformationContainer>
          </DetailContainer>
          <DetailContainer>
            <InformationContainer noPadding>
              <Title>Senior Software Engineer</Title>
              <Duration>'21 - '24</Duration>
            </InformationContainer>
            <InformationContainer>
              <Business>Pegasystems</Business>
              <Location>(Remote)</Location>
            </InformationContainer>
            <InformationContainer flipFlexDirection>
              <div>
                This role included responsbilities such as the following:
              </div>
              <BulletList>
                <li>
                  Plan, implement and write automated tests for features in
                  Enterprise Data Visualization software.
                </li>
                <li>
                  Mentor teammates in topics ranging from Technical/Engineering
                  skills to the Software Development Life Cycle process.
                </li>
                <li>
                  Lead team technical/design discussions, user story refinement,
                  and other re-occuring Agile planning meetings.
                </li>
                <li>
                  Interact with customers to remediate bugs/issues they're
                  facing with a focus on accuracy and efficiency.
                </li>
              </BulletList>
            </InformationContainer>
            <InformationContainer flipFlexDirection>
              <Label>Security Champion</Label>
              <BulletList>
                <li>
                  Continuing education of modern Security practices and new
                  vulnerabilities.
                </li>
                <li>
                  Mentor teammates and other teams on security best practices
                  and related topics.
                </li>
                <li>
                  Investigate and implement fixes for security vulnerabilities.
                </li>
              </BulletList>
            </InformationContainer>
            <InformationContainer>
              <Label>Relevant technologies:</Label>
              <SkillListContainer>
                <SkillList
                  skills={[
                    { type: "typescript" },
                    { type: "javascript" },
                    { type: "react" },
                    { type: "d3" },
                    { type: "jest" },
                    { type: "java" },
                  ]}
                />
              </SkillListContainer>
            </InformationContainer>
          </DetailContainer>
          <DetailContainer>
            <InformationContainer noPadding>
              <Title>Software Engineer</Title>
              <Duration>'19 - '20</Duration>
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
                  Participate in team technical/design discussions, user story
                  refinement, and other re-occuring Agile planning meetings.
                </li>
                <li>
                  Implement and write automated tests for features in Enterprise
                  Data Visualization software.
                </li>
                <li>
                  Implement and write automated tests for features in Customer
                  Relatonship Management and Business Process Management
                  software.
                </li>
                <li>
                  Interact with customers to remediate bugs/issues they're
                  facing with a focus on accuracy and efficiency.
                </li>
              </BulletList>
            </InformationContainer>
            <InformationContainer>
              <Label>Relevant technologies:</Label>
              <SkillListContainer>
                <SkillList
                  skills={[
                    { type: "javascript" },
                    { type: "react" },
                    { type: "d3" },
                    { type: "redux" },
                    { type: "jest" },
                    { type: "java" },
                  ]}
                />
              </SkillListContainer>
            </InformationContainer>
          </DetailContainer>
          <DetailContainer>
            <InformationContainer noPadding>
              <Title>Associate Software Engineer</Title>
              <Duration>'17 - '19</Duration>
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
                  Implement and write automated tests for features in Customer
                  Relatonship Management and Business Process Management
                  software.
                </li>
              </BulletList>
            </InformationContainer>
            <InformationContainer>
              <Label>Relevant technologies:</Label>
              <SkillListContainer>
                <SkillList
                  skills={[
                    { type: "javascript" },
                    { type: "css" },
                    { type: "java" },
                  ]}
                />
              </SkillListContainer>
            </InformationContainer>
          </DetailContainer>
          <DetailContainer>
            <InformationContainer noPadding>
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
                  Implement Front-End features in Customer Relatonship
                  Managmenet and Business Process Management software.
                </li>
              </BulletList>
            </InformationContainer>
            <InformationContainer>
              <Label>Relevant technologies:</Label>
              <SkillListContainer>
                <SkillList
                  skills={[
                    { type: "javascript" },
                    { type: "css" },
                    { type: "java" },
                  ]}
                />
              </SkillListContainer>
            </InformationContainer>
          </DetailContainer>
          <DetailContainer>
            <InformationContainer noPadding>
              <Title>IPSec and IKEv2 Technician</Title>
              <Duration>'14 - '16</Duration>
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
              <Duration>'13 - '17</Duration>
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
