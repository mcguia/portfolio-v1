import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
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
`;

const ProjectsColumn = styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
`;

const Description = styled.div`
    justify-content: center;
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
    margin-bottom: .5em;

    @media ${media.md} {
        font-size: ${fontSizes.sm};
    }
    @media ${media.xl} {
        font-size: ${fontSizes.md};
    }
    font-size: ${fontSizes.sm};
`;

const Projects = () => (
    <ProjectsContainer id="landing">
        <StaticQuery
            query={graphql`
                query ProjectsQuery {
                  contentfulProject {
                    id
                    title
                    type
                    content {
                      content
                    }
                    image {
                      fluid {
                        aspectRatio
                        sizes
                        src
                        srcSet
                      }
                    }
                  }
                }
            `}
            render={data => {
                const { id, title, type, content, image} = data.contentfulProject;
                return (
                    <ProjectsRow>
                        <ProjectsColumn>
                            <Img fluid={image.fluid} />
                            <Description>
                                <ProjectType>{type}</ProjectType>
                                <ProjectName>{title}</ProjectName>
                            </Description>
                        </ProjectsColumn>
                        <ProjectsColumn />
                    </ProjectsRow>
                );
            }}
        />
    </ProjectsContainer>
);

export default Projects;
