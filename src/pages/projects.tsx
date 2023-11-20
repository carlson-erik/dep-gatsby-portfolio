import React from "react";
import Helmet from "react-helmet";
/* ------------------ Components ------------------ */
import Layout from "../components/layout";
import { ThemeProvider } from "../theme/context";
import ProjectList from "../components/project-list";

const ProjectsPage = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Helmet>
          <title>Projects | Erik Carlson</title>
          <meta
            name="description"
            content="Erik Carlson's Software Engineering Personal Projects"
          />
        </Helmet>
        <ProjectList />
      </Layout>
    </ThemeProvider>
  );
};

export default ProjectsPage;
