import React, { Component } from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import {
  ContentWrapper,
  Flex,
  Box,
  IndexTitle
} from "../components/Primitives";
import colors from "../utils/colors.js";
import {
  PrimaryButton,
  SecondaryButton,
  ButtonRow
} from "../components/Buttons";
import Card from "../components/Cards";
import feather from "../utils/feather.js";
import imageBig from "../assets/images/business-header-big.jpg";
import imageSmall from "../assets/images/business-header-small.jpg";
import Link from "gatsby-link";

class Index extends Component {
  render() {
    const {
      header,
      social_links,
      mission_statement
    } = this.props.data.allBusinessJson.edges[0].node;
    const { edges: projects } = this.props.data.allMarkdownRemark;
    const latestProjects = projects.slice(-3);
    return (
      <Layout>
        <Hero imageBig={imageBig} imageSmall={imageSmall}>
          <Box color="white" p={[3, 4, 5]} align="left">
            <h3>{header.headline}</h3>
            <h1>{header.title}</h1>
            <ContentWrapper>
              <p>{header.subline}</p>
            </ContentWrapper>
          </Box>
        </Hero>
        <Box bg="white" p={[3, 4, 5]} align="left">
          <IndexTitle fontSize={[6, 7, 8]}>Our Mission</IndexTitle>
          <p>{mission_statement}</p>
          <ButtonRow>
            <Link to="/about">
              <SecondaryButton>More about us</SecondaryButton>
            </Link>
          </ButtonRow>
        </Box>
        <Box color="white" bg={colors.black} p={[3, 4, 5]} align="left">
          <IndexTitle fontSize={[6, 7, 8]}>Recent Projects</IndexTitle>
          <Flex
            flexWrap={["wrap", "wrap", "nowrap"]}
            justifyContent="space-between"
          >
            {latestProjects.map(({ node: project }, index) => {
              return (
                <Box key={index} color={colors.black} width={[1, 1, 1 / 3.3]}>
                  <Card>
                    <h2>{project.frontmatter.title}</h2>
                    <p>{project.frontmatter.description}</p>
                    <Link to={project.fields.slug}>
                      <PrimaryButton>Read More</PrimaryButton>
                    </Link>
                  </Card>
                </Box>
              );
            })}
          </Flex>
        </Box>
        <Box bg="white" p={[3, 4, 5]} align="left">
          <IndexTitle fontSize={[6, 7, 8]}>Services</IndexTitle>
          <Flex
            flexWrap={["wrap", "wrap", "nowrap"]}
            justifyContent="space-between"
          >
            <Box color="white" width={[1, 1, 1 / 3.3]}>
              <Card inverted>
                <div>{feather("users", ["50", "50"])}</div>
                <div>
                  <h2>Requirements Analysis</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  </p>
                </div>
              </Card>
            </Box>
            <Box color="white" width={[1, 1, 1 / 3.3]}>
              <Card inverted>
                <div>{feather("clipboard", ["50", "50"])}</div>
                <div>
                  <h2>Project Management</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  </p>
                </div>
              </Card>
            </Box>
            <Box color="white" width={[1, 1, 1 / 3.3]}>
              <Card inverted>
                <div>{feather("monitor", ["50", "50"])}</div>
                <div>
                  <h2>Monitoring</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  </p>
                </div>
              </Card>
            </Box>
          </Flex>
          <Flex
            flexWrap={["wrap", "wrap", "nowrap"]}
            justifyContent="space-between"
          >
            <Box color="white" width={[1, 1, 1 / 3.3]}>
              <Card inverted>
                <div>{feather("octagon", ["50", "50"])}</div>
                <div>
                  <h2>Digital Transformation</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  </p>
                </div>
              </Card>
            </Box>
            <Box color="white" width={[1, 1, 1 / 3.3]}>
              <Card inverted>
                <div>{feather("refresh-cw", ["50", "50"])}</div>
                <div>
                  <h2>Agile Methods</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  </p>
                </div>
              </Card>
            </Box>
            <Box color="white" width={[1, 1, 1 / 3.3]}>
              <Card inverted>
                <div>{feather("zap", ["50", "50"])}</div>
                <div>
                  <h2>Change Management</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  </p>
                </div>
              </Card>
            </Box>
          </Flex>
        </Box>
        <Box bg="white" p={[3, 4, 5]} align="left">
          <IndexTitle fontSize={[6, 7, 8]}>Contact Us</IndexTitle>
          <p>We will be happy to answer any of your inquiries, just say Hi!</p>
          <p>
            <strong>
              <a href={`mailto:${social_links.email}`}>{social_links.email}</a>
            </strong>
          </p>
        </Box>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allBusinessJson {
      edges {
        node {
          header {
            title
            headline
            subline
          }
          social_links {
            email
          }
          mission_statement
        }
      }
    }
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
          }
        }
      }
    }
  }
`;
