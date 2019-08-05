import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';


const Project = ({ data }) => {
  const { title, content, image } = data.contentfulProject;
  return (
    <Layout>

      <div className="blogpost">
        <h1>{title}</h1>
        <Img alt={title} fluid={image.fluid} imgStyle={{position: "relative"}}/>

        <p>{content.content}</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  );
};
export default Project;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
        content {
          content
        }
        image {
          fluid {
            srcSet
            src
            sizes
          }
        }
    }
  }
`;
