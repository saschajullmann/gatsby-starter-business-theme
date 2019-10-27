import React from "react";
import Hero from "../components/Hero";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import imageBig from "../assets/images/team-header-big.jpg";
import imageSmall from "../assets/images/team-header-small.jpg";
import { Flex, Box } from "../components/Primitives";
import { TeamCard, TeamDescription } from "../components/Cards";
import feather from "../utils/feather.js";

export default ({ data }) => {
  const { edges: team } = data.allTeamJson;
  return (
    <Layout>
      <Hero imageBig={imageBig} imageSmall={imageSmall}>
        <Box color="white" p={[3, 4, 5]} align="left">
          <h1>Team</h1>
        </Box>
      </Hero>
      <Box color="white" p={[3, 4, 5]} align="left">
        <Flex
          flexWrap={["wrap", "wrap", "wrap"]}
          justifyContent="space-between"
        >
          {team.map(({ node: item }) => {
            return (
              <Box key={item.id} color="white" width={[1, 1, `30%`]}>
                <TeamCard>
                  <div>
                    <img
                      src={item.avatar.children[0].fluid.src}
                      srcSet={item.avatar.children[0].fluid.srcSet}
                      alt={`${item.name}`}
                    />
                  </div>
                  <TeamDescription>
                    <h2>{item.name}</h2>
                    <span>
                      <em>{item.position}</em>
                    </span>
                    <p>{item.description}</p>
                    <ul>
                      <li>
                        <a
                          href={item.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {feather("twitter", ["20", "20"])}
                        </a>
                      </li>
                      <li>
                        <a href={`mailto:${item.email}`}>
                          {feather("mail", ["20", "20"])}
                        </a>
                      </li>
                    </ul>
                  </TeamDescription>
                </TeamCard>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  query TeamQuery {
    allTeamJson {
      edges {
        node {
          id
          name
          position
          description
          email
          twitter
          avatar {
            children {
              ... on ImageSharp {
                fluid(maxWidth: 500) {
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;
