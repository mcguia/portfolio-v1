import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Header, media, theme } from '@styles';
const { fontSizes } = theme;

const SkillsContainer = styled.div`
    padding: 0;
`;

const SkillsRow = styled.div`
    @media ${media.md} {
        display: flex;
    }
    margin-bottom: 5em;
`;

const SkillsColumn = styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
`;

const SkillsBlock = styled.div`
    margin-bottom: 2em;
`;

const SkillsTitle = styled.h4`
    font-weight: 600;
    margin: 0;

    @media ${media.lg} {
        font-size: ${fontSizes.sm};
    }
    @media ${media.xl} {
        font-size: ${fontSizes.md};
    }
    font-size: ${fontSizes.sm};
`;


const SkillsText = styled.div`
    @media ${media.md} {
        font-size: ${fontSizes.xs};
    }
    @media ${media.lg} {
        font-size: ${fontSizes.sm};
    }
    @media ${media.xl} {
        font-size: ${fontSizes.md};
    }
`;

const Skills = () => (
        <StaticQuery
            query={graphql`
                query SkillsQuery {
                    allContentfulDevelopment(sort: {fields: id, order: DESC}) {
                    edges {
                      node {
                        type
                        skills
                        id
                      }
                    }
                  }
                  contentfulDesign {
                    skills
                  }
                }
            `}
            render={data => {
                const Devs = data.allContentfulDevelopment.edges;
                const Design = data.contentfulDesign;
                return (
                    <SkillsContainer id="Skills">
                        <SkillsRow>
                            <SkillsColumn>
                                <Header style={{marginTop: "-0.5em"}}>Development</Header>
                            </SkillsColumn>
                            <SkillsColumn>
                                {Devs.map(({ node: dev }) => (
                                    <SkillsBlock key={dev.id}>
                                        <SkillsTitle>
                                            {dev.type}
                                        </SkillsTitle>
                                        <SkillsText>
                                            {dev.skills}
                                        </SkillsText>
                                    </SkillsBlock>
                                ))}
                            </SkillsColumn>
                        </SkillsRow>

                        <SkillsRow>
                            <SkillsColumn>
                                <Header style={{marginTop: "-0.5em"}}>Design</Header>
                            </SkillsColumn>
                            <SkillsColumn>
                                <SkillsBlock>
                                    <SkillsText>
                                        {Design.skills}
                                    </SkillsText>
                                </SkillsBlock>
                            </SkillsColumn>
                        </SkillsRow>
                    </SkillsContainer>
                );
            }}
        />
);

export default Skills;
