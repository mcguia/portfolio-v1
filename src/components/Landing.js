import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { media, Section, theme } from '@styles';
const { fontSizes } = theme;

const LandingContainer = styled(Section)`
    position: relative;
    @media ${media.md} {
        padding: 15em 0;
    }
`;

const Hello = styled.h1`
    @media ${media.md} {
        font-size: ${fontSizes.lg};
    }
    @media ${media.lg} {
        font-size: ${fontSizes.xl};
    }
    @media ${media.xl} {
        font-size: ${fontSizes.xxl};
    }

`;

const Subtitle = styled.div`
    max-width: 25em;

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

const Landing = () => (
    <LandingContainer id="landing">
        <StaticQuery
            query={graphql`
                query InfoQuery {
                    contentfulInfo {
                        firstName
                        lastName
                        aboutShort
                        socials {
                            email
                            gitlab
                            linkedIn
                        }
                    }
                }
            `}
            render={data => {
                const { aboutShort, firstName } = data.contentfulInfo;

                return (
                    <Fragment>
                        <Hello>{`Hi, I'm ${firstName}.`}</Hello>
                        <Subtitle>{`${aboutShort}`}</Subtitle>
                    </Fragment>
                );
            }}
        />
    </LandingContainer>
);

export default Landing;
