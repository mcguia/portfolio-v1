import React, { useState, useEffect } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import styled from "styled-components"
import Img from "gatsby-image"
import { media, Section, theme } from "@styles"
const { fontSizes, colors } = theme

const ProjectsContainer = styled(Section)``

const ProjectsRow = styled.div`
  @media ${media.md} {
    display: flex;
  }
  @media ${media.md} {
    &:not(:first-child) {
      margin-top: -14vw;
    }
    &:nth-child(odd) {
      margin-right: 5em;
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`

const ProjectsColumn = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
`

const ProjectsHeader = styled.div`
  color: ${colors.lightGrey};
  text-transform: uppercase;
  letter-spacing: 0.06rem;
  font-weight: 600;
  font-size: ${fontSizes.sm};
  margin-bottom: 2em;
`

const Description = styled.div`
  justify-content: center;
  padding: 1em 0 3em 0;
`

const ProjectType = styled.h5`
  color: ${colors.lightGrey};
  text-transform: uppercase;
  letter-spacing: 0.06rem;
  font-weight: 600;
  margin: 0;
  font-size: ${fontSizes.sm};
`

const ProjectName = styled.h4`
  margin: 0;

  @media ${media.md} {
    font-size: ${fontSizes.lg};
  }
  @media ${media.xl} {
    font-size: ${fontSizes.xl};
  }
  font-size: ${fontSizes.lg};
`

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <ProjectsContainer id="projects">
      {isMounted && (
        <ProjectsHeader>
          <span>Selected work</span>
        </ProjectsHeader>
      )}
      <StaticQuery
        query={graphql`
          query ProjectsQuery {
            allContentfulProject(sort: { fields: order, order: ASC }) {
              edges {
                node {
                  id
                  title
                  type
                  order
                  slug
                  featuredImage {
                    fluid(maxWidth: 1000, quality: 90) {
                      srcSet
                      src
                      sizes
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const Projects = data.allContentfulProject.edges

          return (
            <TransitionGroup>
              {isMounted &&
                Projects.map(({ node: project }) => (
                  <CSSTransition
                    classNames="fade"
                    timeout={3000}
                    key={project.id}
                  >
                    <ProjectsRow>
                      <ProjectsColumn>
                        <Link to={`/project/${project.slug}`}>
                          <Img
                            fluid={project.featuredImage.fluid}
                            imgStyle={{ position: "relative" }}
                          />
                        </Link>
                        <Description>
                          <ProjectType>{project.type}</ProjectType>
                          <ProjectName>
                            <Link
                              to={`/project/${project.slug}`}
                              className="link__highlight"
                            >
                              {project.title}
                            </Link>
                          </ProjectName>
                        </Description>
                      </ProjectsColumn>
                      <ProjectsColumn />
                    </ProjectsRow>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          )
        }}
      />
    </ProjectsContainer>
  )
}

export default Projects
