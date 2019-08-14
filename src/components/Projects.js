import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { media, Section, theme } from '@styles';
const { fontSizes, colors } = theme;


const ProjectsContainer = styled(Section)`

`;

const ProjectsRow = styled.div`
    @media ${media.md} {
        display: flex;
    }
    &:nth-child(even) {
        flex-direction: row-reverse;
    }
`;

const ProjectsColumn = styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
`;

const Description = styled.div`
    justify-content: center;
    padding: 2.5em 0 3em 0;
`;

const ProjectType = styled.h5`
    color: ${colors.lightGrey};
    margin: 0;

    @media ${media.md} {
        font-size: ${fontSizes.xs};
    }
    @media ${media.xl} {
        font-size: ${fontSizes.sm};
    }
    font-size: ${fontSizes.xs};
`;

const ProjectName = styled.h4`
    margin: 0;

    @media ${media.md} {
        font-size: ${fontSizes.md};
    }
    @media ${media.xl} {
        font-size: ${fontSizes.lg};
    }
    font-size: ${fontSizes.md};
`;



const Projects = () => (
    <ProjectsContainer id="projects">
        <StaticQuery
            query={graphql`
                query ProjectsQuery {
                  allContentfulProject {
                    edges {
                      node {
                        id
                        title
                        type
                        slug
                        featuredImage {
                          fluid {
                            srcSet
                            src
                            sizes
                          }
                        }
                      }
                    }
                  }
                }

            `}
            render={data => {
                const [isMounted, setIsMounted] = useState(false);
                useEffect(() => {
                    const timeout = setTimeout(() => setIsMounted(true), 2000);
                    return () => clearTimeout(timeout);
                  }, []);

                const Projects = data.allContentfulProject.edges;

                return (
                    <TransitionGroup>
                    {isMounted && Projects.map(({ node: project }) => (
                        <CSSTransition classNames="fade" timeout={3000} key={project.id}>
                        <ProjectsRow>
                            <ProjectsColumn>
                                <Link to={`/project/${project.slug}`}>
                                    <Img fluid={project.featuredImage.fluid} imgStyle={{position: "relative"}}/>
                                    <Description>
                                        <ProjectType>{project.type}</ProjectType>
                                        <ProjectName>{project.title}</ProjectName>
                                    </Description>
                                </Link>
                            </ProjectsColumn>
                            <ProjectsColumn />
                        </ProjectsRow>
                        </CSSTransition>
                        ))}
                    </TransitionGroup>
                );
            }}
        />
    </ProjectsContainer>
);

export default Projects;
