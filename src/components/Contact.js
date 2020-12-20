import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Header, media, Section, mixins, theme } from "@styles"
const { fontSizes } = theme

const ContactContainer = styled(Section)``

const ContactRow = styled.div`
  ${mixins.row};
`

const ContactColumn = styled.div`
  ${mixins.column};
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
`

const Contact = () => (
  <ContactContainer id="about-info">
    <StaticQuery
      query={graphql`
        query ContactQuery {
          contentfulContact {
            contactIntro {
              contactIntro
            }
          }
        }
      `}
      render={data => {
        const { contactIntro } = data.contentfulContact

        return (
          <div>
            <IntroShort>
              <div
                dangerouslySetInnerHTML={{ __html: contactIntro.contactIntro }}
              ></div>
            </IntroShort>
          </div>
        )
      }}
    />
  </ContactContainer>
)

export default Contact
