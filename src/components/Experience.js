import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Header, media, theme } from '@styles';
const { colors, fonts, fontSizes } = theme;

const ExpContainer = styled.div`
    padding-top: 0;
`;

const ExpRow = styled.div`
    @media ${media.md} {
        display: flex;
    }
`;

const ExpColumn = styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
`;

const ExpBlock = styled.div`
    margin-bottom: 2em;
`;

const ExpTitle = styled.h4`
    font-weight: 600;
    margin: 0;

    @media ${media.lg} {
        font-size: ${fontSizes.md};
    }
    @media ${media.xl} {
        font-size: ${fontSizes.lg};
    }
    font-size: ${fontSizes.sm};
    line-height: 2;
`;

const Company = styled.span`
    font-weight: 500;
`;
const ExpDate = styled.div`
    font-family: ${fonts.ApercuMono};
    color: ${colors.lightGrey};
    margin: -0.5em 0 0.5em 0;
    @media ${media.md} {
        font-size: ${fontSizes.xs};
    }
    @media ${media.lg} {
        font-size: ${fontSizes.sm};
    }
    @media ${media.xl} {
        font-size: ${fontSizes.sm};
    }
`;

const ExpText = styled.div`
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

const Experience = () => (
    <ExpContainer id="experience">
        <StaticQuery
            query={graphql`
                query ExpQuery {
                  allContentfulExperience(sort: {fields: date, order: DESC}) {
                    edges {
                      node {
                        id
                        title
                        company
                        startDate
                        endDate
                        date
                        description {
                          description
                        }
                      }
                    }
                  }
                }
            `}
            render={data => {
                const Exps = data.allContentfulExperience.edges;

                return (
                    <ExpRow>
                        <ExpColumn>
                            <Header style={{marginTop: "-0.5em"}}>Experience</Header>
                        </ExpColumn>
                        <ExpColumn>
                            {Exps.map(({ node: exp }) => (
                                <ExpBlock key={exp.id}>
                                    <ExpTitle><span>{exp.title}</span>
                                        <Company>
                                        <span>&nbsp;@&nbsp;</span>
                                        <span>{exp.company}</span>
                                        </Company>
                                    </ExpTitle>
                                    <ExpDate>{exp.startDate}–{exp.endDate}</ExpDate>
                                    <ExpText dangerouslySetInnerHTML={{ __html: exp.description.description }}></ExpText>
                                </ExpBlock>
                            ))}
                        </ExpColumn>
                    </ExpRow>
                );
            }}
        />
    </ExpContainer>
);

export default Experience;
