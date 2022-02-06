import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { Heading } from "../components/styled";
import Rocket from '../images/icons/simple/rocket'
/* ------------------ CSS Styles ------------------ */
import "../styles/reset.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessage = styled(Heading)`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  
  margin-bottom: 1rem;

  & svg {
    height: 4rem;
    width: 4rem;
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <ErrorMessage>
          <Rocket color='black' type='dev'/>
          404
        </ErrorMessage>
        <Heading>No content found!</Heading>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
