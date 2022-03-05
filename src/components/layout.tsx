import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
/* ------------------ Fonts ------------------ */
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/400-italic.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/500-italic.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/dm-sans/700-italic.css";
/* ------------------ Global CSS Styles ------------------ */
import "../styles/global.css";
import "../styles/reset.css";
/* ------------------ Components ------------------ */
import Header from "./header";
/* ------------------ Theme ------------------ */
import { ThemeProvider, ThemeContext } from "../theme/context";
import { Theme } from '../theme/types';

const Container = styled.div<{theme: Theme}>`
  padding: 0 2rem 0 2rem;
  width: 100%;
  max-width: 1100px;

  @media only screen and (max-width: 625px) {
    padding: 0;
  }

  & a,
  & a:visited {
    color: ${(props) => props.theme.colors.link.text};
  }

  & a:hover {
    color: ${(props) => props.theme.colors.link.textHover};
  }
`;

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.text};
  }
`;

const MainContent = styled.main`
  padding: 0 5rem 0 5rem;
  width: 100%;

  @media only screen and (max-width: 1100px) {
    padding: 0;
  }

  & > * {
    margin-bottom: 1rem;
  }
`;

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <GlobalStyle theme={theme} />
      <Container theme={theme}>
        <Header />
        <MainContent>{children}</MainContent>
      </Container>
    </>
  );
};

export default Layout;
