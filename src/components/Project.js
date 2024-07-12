import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { media, mixins, Section, theme } from "@styles"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const { fonts, fontSizes, colors } = theme

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const ProjectContainer = styled(Section)`
  padding: 0 !important;
  @media ${media.sm} {
    width: 70%;
  }
  width: auto;
`

const ProjectHeader = styled.div`
  position: relative;
  @media ${media.md} {
    padding: 8em 0 4em;
  }
  padding-top: 5em;
`

const ProjectInfo = styled.div`
  padding: 4em 0;
`

const ProjectRow = styled.div`
  ${mixins.row};
`

const ProjectColumn = styled.div`
  ${mixins.column};
  @media ${media.md} {
    padding: 0;
  }
  padding-bottom: 1.5em;
`

const InfoRow = styled.div`
  align-items: flex-start !important;
  ${mixins.row};
`

const LeftColumn = styled.div`
  ${mixins.column};
  @media ${media.md} {
    padding-right: 2em;
    margin: 0;
  }
  margin-bottom: 1em;
`

const RightColumn = styled.div`
  ${mixins.column};
  @media ${media.md} {
    padding-left: 2em;
  }
`
const ProjectType = styled.h2`
  color: ${colors.lightGrey};
  text-transform: uppercase;
  letter-spacing: 0.06rem;
  margin-bottom: 0.4rem;

  @media ${media.md} {
    font-size: ${fontSizes.xs};
  }
  @media ${media.xl} {
    font-size: ${fontSizes.sm};
  }
  font-size: ${fontSizes.xs};
`

const ProjectTitle = styled.h2`
  color: ${colors.lightGrey};
  text-transform: uppercase;
  letter-spacing: 0.06rem;
  font-size: ${fontSizes.xs};
  @media ${media.md} {
    font-size: ${fontSizes.sm};
  }
`

const ProjectName = styled.h1`
  margin: 0;

  @media ${media.md} {
    font-size: ${fontSizes.lg};
  }
  @media ${media.lg} {
    font-size: ${fontSizes.xl};
  }
  @media ${media.xl} {
    font-size: ${fontSizes.xxl};
  }
  font-size: ${fontSizes.xl};
`

const StyledImg = styled.img`
  max-width: 100%;
`

const ProjectText = styled.p`
  margin-block-start: 1.5em;
  margin-block-end: 1.5em;
  @media ${media.md} {
    font-size: ${fontSizes.sm};
  }
  @media ${media.lg} {
    font-size: ${fontSizes.sm};
  }
  @media ${media.xl} {
    font-size: ${fontSizes.md};
  }
`

const InfoText = styled.div`
  font-family: ${fonts.ApercuMono};

  @media ${media.md} {
    font-size: ${fontSizes.sm};
  }
  @media ${media.lg} {
    font-size: ${fontSizes.md};
  }
  @media ${media.xl} {
    font-size: ${fontSizes.md};
  }
`

const IconLink = styled.a`
  padding: 10px;
`

const Stripe = styled.div`
  background: rgba(25, 26, 30, 0.15);
  width: 100%;
  height: 1px;
  float: left;
  margin: 25px 0;
`
const Bold = ({ children }) => <span className="bold">{children}</span>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      if (node.data.target.fields) {
        const { title, description, file } = node.data.target.fields
        const mimeType = file["en-US"].contentType
        const mimeGroup = mimeType.split("/")[0]

        switch (mimeGroup) {
          case "image":
            return (
              <StyledImg
                title={title ? title["en-US"] : null}
                alt={description ? description["en-US"] : null}
                src={file["en-US"].url}
              />
            )
        }
      }
    },

    [BLOCKS.PARAGRAPH]: (node, children) => (
      <ProjectText>{children}</ProjectText>
    ),
  },
}

const Project = ({ data }) => {
  const {
    title,
    type,
    startDate,
    endDate,
    github,
    external,
    featuredInfo,
    technologies,
    featuredImage,
    mainContent,
  } = data
  const tech = technologies.join(", ")
  let date1, date2
  date1 = new Date(startDate)

  if (endDate) {
    date2 = new Date(endDate)
  }

  return (
    <ProjectContainer id="project">
      <ProjectHeader>
        <ProjectRow>
          <ProjectColumn>
            <ProjectType>{type}</ProjectType>
            <ProjectName>{title}</ProjectName>
          </ProjectColumn>
          <ProjectColumn>
            <Img
              fluid={featuredImage.fluid}
              imgStyle={{ position: "relative" }}
            />
          </ProjectColumn>
        </ProjectRow>
      </ProjectHeader>

      <ProjectInfo>
        <InfoRow>
          <LeftColumn>
            <ProjectTitle>The Project</ProjectTitle>
            <div dangerouslySetInnerHTML={{ __html: featuredInfo }}></div>
          </LeftColumn>
          <RightColumn>
            <ProjectTitle>Technologies</ProjectTitle>
            <InfoText>{tech}</InfoText>
            <Stripe />
            <ProjectTitle>Date</ProjectTitle>
            <InfoText>
              {months[date1.getMonth()] + " " + date1.getFullYear()}
              {endDate &&
                "–" + months[date2.getMonth()] + " " + date2.getFullYear()}
            </InfoText>
            {(github || external) && <Stripe />}
            {github && (
              <IconLink
                href={github}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Github Link"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  style={{ color: colors.darkGrey }}
                />
              </IconLink>
            )}
            {external && (
              <IconLink
                href={external}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
              >
                <FontAwesomeIcon
                  icon="external-link-alt"
                  style={{ color: colors.darkGrey }}
                  size="sm"
                />
              </IconLink>
            )}
          </RightColumn>
        </InfoRow>
      </ProjectInfo>
      {documentToReactComponents(mainContent.json, options)}
      <Link to="/" className="link__highlight">
        Back to Home
      </Link>
    </ProjectContainer>
  )
}

export default Project
