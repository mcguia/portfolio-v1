import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Header, media, theme, mixins } from "@styles"
const { colors, fonts, fontSizes } = theme

const ExpContainer = styled.div`
  padding-top: 0;
`

const ExpRow = styled.div`
  ${mixins.row};
`

const ExpColumn = styled.div`
  ${mixins.column};
`

const ExpBlock = styled.div`
  margin-bottom: 4em;
`

const ExpTitle = styled.h4`
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0.7rem;

  @media ${media.lg} {
    font-size: ${fontSizes.md};
  }
  @media ${media.xl} {
    font-size: ${fontSizes.lg};
  }
  font-size: ${fontSizes.sm};
  line-height: 1.5;
`

const Company = styled.span`
  font-weight: 600;
`
const ExpDate = styled.div`
  font-family: ${fonts.ApercuMono};
  color: ${colors.lightGrey};
  margin: -0.5em 0 1em 0;
  @media ${media.md} {
    font-size: ${fontSizes.xs};
  }
  @media ${media.lg} {
    font-size: 1rem;
  }
  @media ${media.xl} {
    font-size: 1.1rem;
  }
`

const Experience = () => (
  <ExpContainer id="experience">
    <StaticQuery
      query={graphql`
        query ExpQuery {
          allContentfulExperience(sort: { fields: date, order: DESC }) {
            edges {
              node {
                id
                title
                company
                startDate
                endDate
                date
                description {
                  description
                }
              }
            }
          }
        }
      `}
      render={data => {
        const Exps = data.allContentfulExperience.edges

        return (
          <ExpRow>
            <ExpColumn>
              <Header>Experience</Header>
            </ExpColumn>
            <ExpColumn>
              {Exps.map(({ node: exp }) => (
                <ExpBlock key={exp.id}>
                  <ExpTitle>
                    <span>{exp.title}</span>
                    <Company>
                      {exp.company && <span>&nbsp;@&nbsp;</span>}
                      <span>{exp.company}</span>
                    </Company>
                  </ExpTitle>
                  <ExpDate>
                    {exp.startDate}–{exp.endDate}
                  </ExpDate>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: exp.description.description,
                    }}
                  ></div>
                </ExpBlock>
              ))}
            </ExpColumn>
          </ExpRow>
        )
      }}
    />
  </ExpContainer>
)

export default Experience
