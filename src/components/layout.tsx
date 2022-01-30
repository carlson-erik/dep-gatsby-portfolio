import React from 'react';
import styled from 'styled-components';
/* ------------------ Fonts ------------------ */
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/400-italic.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/500-italic.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/dm-sans/700-italic.css";
/* ------------------ Global CSS Styles ------------------ */
import '../styles/global.css';
import '../styles/reset.css';
/* ------------------ Components ------------------ */
import Header from './header';

const Container = styled.div`
  padding: 0 2rem 0 2rem;
  width: 100%;
  max-width:1100px;

  @media only screen and (max-width: 700px) { 
    padding: 0;
  }
`;

const MainContent = styled.main`
  padding: 0 5rem 0 5rem;
  width: 100%;

  @media only screen and (max-width: 950px) { 
    padding: 0;
  }

  & > * {
    margin-bottom: 0.5rem;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Container>
      <Header />
      <MainContent>
        {children}
      </MainContent>
    </Container>
  )
};

export default Layout;