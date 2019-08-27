import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { media, Section, theme, mixins } from "@styles"
import ImageParticles from "../components/ImageParticles"

const { fontSizes } = theme

const LandingContainer = styled(Section)`
  position: relative;
`

const LandingRow = styled.div`
  ${mixins.row};
`

const LeftColumn = styled.div`
  ${mixins.column};
`

const RightColumn = styled.div`
  ${mixins.column};
  @media ${media.md} {
    padding: 0;
  }
  padding: 5em 0;
`

const Hello = styled.h1`
  @media ${media.lg} {
    font-size: ${fontSizes.xxl};
  }
  @media ${media.xl} {
    font-size: ${fontSizes.xxxl};
  }
  font-size: ${fontSizes.xl};
`

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
`

const Landing = () => (
  <LandingContainer id="landing">
    <StaticQuery
      query={graphql`
        query InfoQuery {
          contentfulInfo {
            firstName
            lastName
            aboutShort
          }
        }
      `}
      render={data => {
        const [isMounted, setIsMounted] = useState(false)

        useEffect(() => {
          const timeout = setTimeout(() => setIsMounted(true), 800)
          return () => clearTimeout(timeout)
        }, [])

        const { aboutShort, firstName } = data.contentfulInfo
        const one = () => (
          <Hello
            style={{ transitionDelay: "100ms" }}
          >{`Hi, I'm ${firstName}.`}</Hello>
        )
        const two = () => (
          <Subtitle
            style={{ transitionDelay: "200ms" }}
          >{`${aboutShort}`}</Subtitle>
        )

        const items = [one, two]

        return (
          <LandingRow>
            <LeftColumn>
              <TransitionGroup>
                {isMounted &&
                  items.map((item, i) => (
                    <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                      {item}
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </LeftColumn>
            <RightColumn>
              <ImageParticles imageUrl={"smiley.png"} size="8" />
            </RightColumn>
          </LandingRow>
        )
      }}
    />
  </LandingContainer>
)

export default Landing
