import React from "react";
import { graphql } from "gatsby";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import imageBig from "../../assets/images/projects-header-big.jpg";
import imageSmall from "../../assets/images/projects-header-small.jpg";
import { Box, ContentWrapper } from "../../components/Primitives";
import { List } from "../../components/Lists";
import Link from "gatsby-link";
import colors from "../../utils/colors.js";

export default ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark;
  return (
    <Layout>
      <Hero imageBig={imageBig} imageSmall={imageSmall}>
        <Box color="white" p={[3, 4, 5]} align="left">
          <h1>Projects</h1>
        </Box>
      </Hero>
      <Box color={colors.black} p={[3, 4, 5]} align="left">
        <List>
          {projects.map(({ node: project }, index) => {
            return (
              <li key={index}>
                <ContentWrapper>
                  <h1>
                    <Link to={project.fields.slug}>
                      {project.frontmatter.title}
                    </Link>
                  </h1>
                  <p>{project.frontmatter.description}</p>
                </ContentWrapper>
              </li>
            );
          })}
        </List>
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "project" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            category
            description
            date
          }
        }
      }
    }
  }
`;
