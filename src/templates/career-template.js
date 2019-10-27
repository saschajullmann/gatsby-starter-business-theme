import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import imageBig from "../assets/images/career-header-big.jpg";
import imageSmall from "../assets/images/career-header-small.jpg";
import { Box } from "../components/Primitives";
import colors from "../utils/colors.js";

export default ({ data }) => {
  const career = data.markdownRemark;
  return (
    <Layout>
      <Hero imageBig={imageBig} imageSmall={imageSmall}>
        <Box color="white" p={[3, 4, 5]} align="left">
          <h1>{career.frontmatter.title}</h1>
        </Box>
      </Hero>
      <Box
        color={colors.black}
        py={"2rem"}
        pl={["2em", "4em", "6em", "20em"]}
        pr={["2em", "4em", "6em", "20em"]}
        align="left"
      >
        <div dangerouslySetInnerHTML={{ __html: career.html }} />
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  query CareerQueryByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
