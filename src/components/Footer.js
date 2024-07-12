import React, { useEffect, useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { theme, media } from "@styles"
const { fontSizes, fonts } = theme

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 4em 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: ${fonts.HKGrotesk};

  @media ${media.sm} {
    flex-direction: row;
    align-items: center;
  }
`

const FooterLinks = styled.div`
  align-items: center;
  display: flex;
`

const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

const FooterListItem = styled.li`
  margin: 0 0.8em 0 0;
  position: relative;
  font-size: ${fontSizes.md};
  font-weight: 500;
`

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        allContentfulSocial {
          edges {
            node {
              name
              url
              id
            }
          }
        }
      }
    `}
    render={data => {
      const [isMounted, setIsMounted] = useState(false)
      useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 2500)
        return () => clearTimeout(timeout)
      }, [])
      const Socials = data.allContentfulSocial.edges

      return (
        <FooterContainer id="footer">
          {isMounted && (
            <FooterLinks>
              <FooterList>
                {Socials.map(({ node: social }) => (
                  <FooterListItem key={social.id}>
                    <a
                      href={social.url}
                      className="link__underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt={social.name}
                    >
                      {social.name}
                    </a>
                  </FooterListItem>
                ))}
              </FooterList>
            </FooterLinks>
          )}
        </FooterContainer>
      )
    }}
  />
)

export default Footer
