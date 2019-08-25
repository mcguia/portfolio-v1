import React, { useState, useEffect } from 'react';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import { Project, Footer } from '@components';
import { mixins, Main } from '@styles';
import styled from 'styled-components';

const ProjectContainer = styled(Main)`
    ${mixins.sideMargin};
`;

const ProjectPage = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
  <ProjectContainer id="content">
      <TransitionGroup>
        {isMounted &&
          <CSSTransition classNames="fade" timeout={3000}>
            <Project data={data.contentfulProject} />
          </CSSTransition>
        }
      </TransitionGroup>
      <Footer />
  </ProjectContainer>
  );
};

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
