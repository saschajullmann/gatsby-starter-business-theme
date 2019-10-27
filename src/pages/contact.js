import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import imageBig from "../assets/images/contact-header-big.jpg";
import imageSmall from "../assets/images/contact-header-small.jpg";
import { Box, ContentWrapper } from "../components/Primitives";
import colors from "../utils/colors.js";

export default ({ data }) => {
  const { social_links } = data.allBusinessJson.edges[0].node;
  return (
    <Layout>
      <Hero imageBig={imageBig} imageSmall={imageSmall}>
        <Box color="white" p={[3, 4, 5]} align="left">
          <h1>Contact</h1>
        </Box>
      </Hero>
      <Box color={colors.black} p={[3, 4, 5]} align="left">
        <ContentWrapper>
          <h2>Get in touch</h2>
          <p>
            If you wanna get in touch, to leave feedback or have any questions
            we are happy to answer. Please send us an e-mail to:
          </p>
          <h3>
            <a href={`mailto:${social_links.email}`}>{social_links.email}</a>
          </h3>
        </ContentWrapper>
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ContactQuery {
    allBusinessJson {
      edges {
        node {
          social_links {
            email
          }
        }
      }
    }
  }
`;
