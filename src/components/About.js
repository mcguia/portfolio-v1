import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Header, media, Section, mixins, theme } from "@styles"
const { fontSizes } = theme

const InfoContainer = styled(Section)``

const AboutRow = styled.div`
  ${mixins.row};
  @media ${media.md} {
    flex-direction: row-reverse;
  }
`

const AboutColumn = styled.div`
  ${mixins.column};
  @media ${media.md} {
    padding-right: 4rem;
  }
`

const IntroShort = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  font-weight: 600;
  @media ${media.lg} {
    font-size: ${fontSizes.md};
  }
  @media ${media.xl} {
    font-size: ${fontSizes.lg};
  }
  font-size: ${fontSizes.sm};
  @media ${media.lg} {
    width: 66%;
  }
`

const IntroColumn = styled(AboutColumn)`
  align-self: flex-end;
`

const AboutPixel = styled.div`
  @media ${media.xl} {
    background-image: url(${props => props.image1});
    min-height: 560px;
  }
  background-image: url(${props => props.image2});
  min-height: 280px;
  background-position: center center;
  background-repeat: no-repeat;
`

const About = () => (
  <InfoContainer id="about-info">
    <StaticQuery
      query={graphql`
        query AboutInfoQuery {
          contentfulAbout {
            introShort {
              introShort
            }
            intro {
              intro
            }
            me {
              fluid(maxWidth: 900, quality: 90) {
                srcSet
                src
                sizes
              }
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
        const { introShort, intro, me, image1, image2 } = data.contentfulAbout

        return (
          <div>
            <IntroShort>
              <div
                dangerouslySetInnerHTML={{ __html: introShort.introShort }}
              ></div>
            </IntroShort>
            <AboutRow>
              <AboutColumn>
                <Img fluid={me.fluid} imgStyle={{ position: "relative" }} />
              </AboutColumn>
              <IntroColumn>
                <div dangerouslySetInnerHTML={{ __html: intro.intro }}></div>
              </IntroColumn>
            </AboutRow>
          </div>
        )
      }}
    />
  </InfoContainer>
)

export default About
