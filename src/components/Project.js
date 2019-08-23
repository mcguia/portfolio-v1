import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { media, mixins, Section, theme } from '@styles';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
const { fontSizes } = theme;


const ProjectContainer = styled(Section)`
  ${mixins.projectMargin};
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const ProjectText = styled.p`
    margin-block-start: 1.5em;
    margin-block-end: 1.5em;
    @media ${media.md} {
        font-size: ${fontSizes.xs};
    }
    @media ${media.lg} {
        font-size: ${fontSizes.sm};
    }
    @media ${media.xl} {
        font-size: ${fontSizes.md};
    }
`;

const Bold = ({ children }) => <span className="bold">{children}</span>


const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      const mimeType = file['en-US'].contentType
      const mimeGroup = mimeType.split('/')[0]

      switch (mimeGroup) {
        case 'image':
          return <StyledImg
            title={ title ? title['en-US'] : null}
            alt={description ?  description['en-US'] : null}
            src={file['en-US'].url}
          />
      }

    },

    [BLOCKS.PARAGRAPH]: (node, children) => <ProjectText>{children}</ProjectText>,
  }
}


const Project = ({ data }) => {
  const { title, mainContent, featuredImage } = data;

  return (
      <ProjectContainer id="project">
        <h1>{title}</h1>
        { documentToReactComponents(mainContent.json, options) }
        <Link to="/">Back to Home</Link>
      </ProjectContainer>
  );
};

export default Project;
