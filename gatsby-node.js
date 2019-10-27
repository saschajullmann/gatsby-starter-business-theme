const parseFilepath = require("parse-filepath");
const path = require("path");
const slash = require("slash");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = parseFilepath(fileNode.relativePath);
    let slug = `/${parsedFilePath.dir}/`;
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const projectsTemplate = path.resolve("src/templates/project-template.js");
    const careerTemplate = path.resolve("src/templates/career-template.js");

    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    category
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.error) {
          reject(result.error);
        }

        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.category === "career") {
            createPage({
              path: `${edge.node.fields.slug}`,
              component: slash(careerTemplate),
              context: {
                slug: edge.node.fields.slug
              }
            });
          } else {
            createPage({
              path: `${edge.node.fields.slug}`,
              component: slash(projectsTemplate),
              context: {
                slug: edge.node.fields.slug
              }
            });
          }
          return;
        });
      })
    );
  });
};
