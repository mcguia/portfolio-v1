/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules

const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    },
  });
};


const slash = require(`slash`);
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

  return graphql(
    `
      {
        allContentfulProject {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data",      result.errors);
      }
      const projectTemplate = path.resolve("./src/pages/project.js");
      result.data.allContentfulProject.edges.forEach(edge => {
        createPage({
          path: `/project/${edge.node.slug}/`,
          component: slash(projectTemplate),
          context: {
        slug: edge.node.slug,
            id: edge.node.id
          }
        });
      });
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};
