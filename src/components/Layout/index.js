import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Helmet from "react-helmet";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      allBusinessJson {
        edges {
          node {
            header {
              title
            }
            social_links {
              facebook
              twitter
              instagram
              email
            }
          }
        }
      }
    }
  `);
  const { social_links, header } = data.allBusinessJson.edges[0].node;
  return (
    <div>
      <Helmet>
        <title>{header.title}</title>
      </Helmet>
      <Navigation />
      {children}
      <Footer
        facebook={social_links.facebook}
        twitter={social_links.twitter}
        instagram={social_links.instagram}
        email={social_links.email}
        name={header.title}
      />
    </div>
  );
};

export default Layout;
