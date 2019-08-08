import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Section } from '@styles';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Img from 'gatsby-image';


const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

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
          return <img
            title={ title ? title['en-US'] : null}
            alt={description ?  description['en-US'] : null}
            src={file['en-US'].url}
          />
      }

    },

    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  }
}

const ProjectContainer = styled(Section)`

`;

const Project = ({ data }) => {
  const { title, mainContent, featuredImage } = data;

  return (
      <ProjectContainer id="project">
        <h1>{title}</h1>
        <Img alt={title} fluid={featuredImage.fluid} imgStyle={{position: "relative"}}/>
        { documentToReactComponents(mainContent.json, options) }
        <Link to="/">Back to Home</Link>
      </ProjectContainer>
  );
};

export default Project;
