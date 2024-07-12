import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { media, Section, mixins, theme } from "@styles"
const { colors, fonts, fontSizes } = theme

const ContactContainer = styled(Section)`
  min-height: 100vh;
`

const ContactRow = styled.div`
  ${mixins.row};
`

const ContactColumn = styled.div`
  ${mixins.column};
`

const ContactSection = styled.div`
  max-width: 700px;
`

const IntroShort = styled.div`
  width: 100%;
  margin-bottom: 2em;
  font-weight: 600;
  @media ${media.lg} {
    font-size: ${fontSizes.xl};
  }
  @media ${media.xl} {
    font-size: ${fontSizes.xxl};
  }
  font-size: ${fontSizes.lg};
`

const ContactBody = styled.div`
  margin-bottom: 2em;
`

const ContactLinks = styled.div`
  margin-bottom: 2em;
  display: flex;
`

const ContactCaption = styled.div`
  font-family: ${fonts.ApercuMono};
  color: ${colors.lightGrey};
  margin: -0.5em 0 1em 0;
  font-size: ${fontSizes.xs};
  @media ${media.md} {
    font-size: ${fontSizes.sm};
  }
  @media ${media.lg} {
    font-size: ${fontSizes.sm};
  }
`

const ContactSocial = styled.a`
  font-weight: 400;
  @media ${media.lg} {
    font-size: ${fontSizes.sm};
  }
  @media ${media.xl} {
    font-size: ${fontSizes.md};
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
            contactBody {
              contactBody
            }
            socials {
              name
              url
              caption
            }
          }
        }
      `}
      render={data => {
        const { contactIntro, contactBody, socials } = data.contentfulContact

        return (
          <ContactSection>
            <IntroShort>
              <div
                dangerouslySetInnerHTML={{ __html: contactIntro.contactIntro }}
              ></div>
            </IntroShort>
            <ContactBody>
              <div
                dangerouslySetInnerHTML={{ __html: contactBody.contactBody }}
              ></div>
            </ContactBody>
            <ContactLinks>
              {socials.map(social => (
                <Fragment>
                  <ContactColumn>
                    <ContactCaption>{social.caption}</ContactCaption>
                    <ContactSocial
                      href={social.url}
                      className="link__highlight"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt={social.name}
                    >
                      {social.name === "Email"
                        ? "amcg10@gmail.com"
                        : social.name}
                    </ContactSocial>
                  </ContactColumn>
                </Fragment>
              ))}
            </ContactLinks>
          </ContactSection>
        )
      }}
    />
  </ContactContainer>
)

export default Contact
