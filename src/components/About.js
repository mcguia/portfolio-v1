import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Header, media, Section, theme, mixins } from "@styles"

const InfoContainer = styled(Section)``

const AboutRow = styled.div`
  ${mixins.row};
  @media ${media.md} {
    flex-direction: row-reverse;
  }
`

const AboutColumn = styled.div`
  ${mixins.column};
`

const AboutImage = styled.div`
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
        const { intro, image1, image2 } = data.contentfulAbout

        return (
          <AboutRow>
            <AboutColumn>
              <AboutImage image1={image1.file.url} image2={image2.file.url} />
            </AboutColumn>
            <AboutColumn>
              <Header>About</Header>
              <div dangerouslySetInnerHTML={{ __html: intro.intro }}></div>
            </AboutColumn>
          </AboutRow>
        )
      }}
    />
  </InfoContainer>
)

export default About
