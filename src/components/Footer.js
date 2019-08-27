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
  justify-content: flex-start;
  align-items: flex-start;
  font-family: ${fonts.HKGrotesk};

  @media ${media.sm} {
    flex-direction: row;
    justify-content: space-between;
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
`

const FooterListItem = styled.li`
  margin: 0 0.8em 0 0;
  position: relative;
  font-size: ${fontSizes.sm};
  font-weight: 500;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSizes.sm};
  font-weight: 600;
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
            <Logo>
              <Link to={"/"}>Austin McGuire</Link>
            </Logo>
          )}
          {isMounted && (
            <FooterLinks>
              <FooterList>
                {Socials.map(({ node: social }) => (
                  <FooterListItem key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      alt={social.name}
                    >
                      {social.name.toLowerCase()}
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
