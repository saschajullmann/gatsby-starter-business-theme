import React from "react";
import { graphql } from "gatsby";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import imageBig from "../../assets/images/career-header-big.jpg";
import imageSmall from "../../assets/images/career-header-small.jpg";
import { Box } from "../../components/Primitives";
import { List } from "../../components/Lists";
import colors from "../../utils/colors.js";
import Link from "gatsby-link";

export default ({ data }) => {
  const { edges: vacancies } = data.allMarkdownRemark;
  return (
    <Layout>
      <Hero imageBig={imageBig} imageSmall={imageSmall}>
        <Box color="white" p={[3, 4, 5]} align="left">
          <h1>Career</h1>
        </Box>
      </Hero>
      <Box color={colors.black} p={[3, 4, 5]} align="left">
        <List>
          {vacancies.map(({ node: vacancy }, index) => {
            return (
              <li key={index}>
                <h1>
                  <Link to={vacancy.fields.slug}>
                    {vacancy.frontmatter.title}
                  </Link>
                </h1>
              </li>
            );
          })}
        </List>
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  query VacanciesQuery {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "career" } } }) {
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
