import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
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

const ProjectType = styled.h5`
    color: ${colors.lightGrey};
    margin: 0 0 .5em;

    @media ${media.md} {
        font-size: ${fontSizes.xs};
    }
    @media ${media.xl} {
        font-size: ${fontSizes.sm};
    }
    font-size: ${fontSizes.xs};
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
                const Projects = data.allContentfulProject.edges;

                return (
                    <div>
                    {Projects.map(({ node: project }) => (
                        <ProjectsRow key={project.id}>
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
                        ))}
                    </div>
                );
            }}
        />
    </ProjectsContainer>
);

export default Projects;
