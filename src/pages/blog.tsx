import React from "react";
import Helmet from "react-helmet";
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

const BlogPage = () => {
  return (
    <Layout>
      <Helmet>
          <title>Blog | Erik Carlson</title>
          <meta name="description" content="Software Engineer Erik Carlson's Blog" />
      </Helmet>
      <Heading>Blog</Heading>
      <Paragraph>
        No new posts yet!
      </Paragraph>
    </Layout>
  );
};

export default BlogPage;
