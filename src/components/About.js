import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Header, media, Section, theme } from '@styles';
const { fontSizes } = theme;

const InfoContainer = styled(Section)`
`;

const AboutRow = styled.div`
    @media ${media.md} {
        display: flex;
        flex-direction: row-reverse;
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
    @media ${media.xl} {
        background-image: url( ${props => props.image1} );
        min-height: 560px;
    }
    background-image: url( ${props => props.image2} );
    min-height: 280px;
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
    <InfoContainer id="about-info">
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
                    <AboutRow>
                        <AboutColumn>
                            <AboutImage image1={image1.file.url} image2={image2.file.url}/>
                        </AboutColumn>
                        <AboutColumn>
                            <Header>About</Header>
                            <AboutIntro dangerouslySetInnerHTML={{ __html: intro.intro }}></AboutIntro>
                        </AboutColumn>
                    </AboutRow>
                );
            }}
        />
    </InfoContainer>
);

export default About;
