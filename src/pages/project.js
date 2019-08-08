import React from 'react';
import { Project, Footer, Layout } from '@components';
import { mixins, Main, Section } from '@styles';
import styled from 'styled-components';

const ProjectContainer = styled(Main)`
    ${mixins.sidePadding};
`;

const ProjectPage = ({ data }) => (
    <Layout>
        <ProjectContainer id="content">
            <Project data={data.contentfulProject} />
            <Footer />
        </ProjectContainer>
    </Layout>
);

export default ProjectPage;


export const PageQuery = graphql`
  query ProjectQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      mainContent {
        json
      }
      featuredImage {
        fluid {
          srcSet
          src
          sizes
        }
      }
    }
  }
`;
