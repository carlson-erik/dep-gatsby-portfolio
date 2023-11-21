import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
/* ------------------ Components ------------------ */
import Layout from "../components/layout";
import { ThemeProvider } from "../theme/context";

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
`;

const BlogPage = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Helmet>
          <title>Blog | Erik Carlson</title>
          <meta
            name="description"
            content="Erik Carlson's Software Engineering Blog"
          />
        </Helmet>
        <Heading>Blog</Heading>
        <Paragraph>No new posts yet!</Paragraph>
      </Layout>
    </ThemeProvider>
  );
};

export default BlogPage;
