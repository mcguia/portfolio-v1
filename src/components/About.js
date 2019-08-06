import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { media, Section, theme } from '@styles';
const { fontSizes } = theme;

const AboutContainer = styled(Section)`
`;

const AboutHeader = styled.h1`
    @media ${media.md} {
        font-size: ${fontSizes.xl};
    }
    @media ${media.lg} {
        font-size: ${fontSizes.xxl};
    }

    margin-top: 0;
`;

const AboutRow = styled.div`
    @media ${media.md} {
        display: flex;
    }
    align-items: center;
`;

const AboutColumn = styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
`;

const AboutImage = styled.div`
    min-height: 560px;
    @media (min-width: 1272px) {
        background-image: url( ${props => props.image1} );
    }
    background-image: url( ${props => props.image2} );
    background-position: center center;
    background-repeat: no-repeat;

`;

const AboutIntro = styled.div`
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

const About = () => (
    <AboutContainer id="about-info">
        <StaticQuery
            query={graphql`
                query AboutInfoQuery {
                  contentfulAbout {
                    intro {
                      intro
                    }
                    image1 {
                      file {
                        url
                      }
                    }
                    image2 {
                      file {
                        url
                      }
                    }
                  }
                }
            `}
            render={data => {
                const { intro, image1, image2 } = data.contentfulAbout;

                return (
                    <AboutContainer>
                        <AboutRow>
                            <AboutColumn>
                                <AboutHeader>About</AboutHeader>
                                <AboutIntro dangerouslySetInnerHTML={{ __html: intro.intro }}></AboutIntro>
                            </AboutColumn>
                            <AboutColumn>
                                <AboutImage image1={image1.file.url} image2={image2.file.url}/>
                            </AboutColumn>
                        </AboutRow>
                    </AboutContainer>
                );
            }}
        />
    </AboutContainer>
);

export default About;
