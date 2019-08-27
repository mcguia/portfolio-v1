import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Project, Footer } from "@components"
import { mixins, Main } from "@styles"
import styled from "styled-components"

const ProjectContainer = styled(Main)`
  ${mixins.sideMargin};
`

const ProjectPage = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <ProjectContainer id="content">
      <Helmet
        title={
          data.site.siteMetadata.title + " | " + data.contentfulProject.title
        }
      ></Helmet>
      <TransitionGroup>
        {isMounted && (
          <CSSTransition classNames="fade" timeout={3000}>
            <Project data={data.contentfulProject} />
          </CSSTransition>
        )}
      </TransitionGroup>
      <Footer />
    </ProjectContainer>
  )
}

export default ProjectPage

export const PageQuery = graphql`
  query ProjectQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      title
      type
      startDate
      endDate
      gitlab
      external
      slug
      featuredInfo
      technologies
      mainContent {
        json
      }
      featuredImage {
        fluid(maxWidth: 900, quality: 90) {
          srcSet
          src
          sizes
        }
      }
    }
  }
`
