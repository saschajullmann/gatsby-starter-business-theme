import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import colors from "../../utils/colors.js";
import { Box, Flex } from "../Primitives";
import Logo from "../../assets/logo-white.svg";
import feather from "../../utils/feather.js";
import Link from "gatsby-link";

const footerStyle = css`
  overflow: hidden;
  background-color: ${colors.black};
  color: rgba(255, 255, 255, 0.5);
  text-align: center;

  & img {
    display: block;
    margin: 0;
  }
`;

const ulStyle = css`
  list-style-type: none;
  margin: 0;
  margin-bottom: 1.45rem;
  text-transform: uppercase;
  & a {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
    transition: color 0.15s ease-in;

    &:hover {
      text-decoration: none;
      box-shadow: none;
      opacity: 1;
      transition: opacity 0.15s ease-in;
    }
  }
  & li {
    margin: 0;
  }

  & a svg {
    stroke: pink;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0;

  @media (min-width: 832px) {
    width: 75%;
    margin: 0;
  }
`;

const WrapperLast = styled.div`
  width: 100%;
  margin-left: auto;

  @media (min-width: 832px) {
    width: 75%;
    margin-left: auto;
  }
`;

const socialList = css`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
`;

const mySvg = css`
  opacity: 0.5;
  transition: opacity 0.15s ease-in;
  transition: color 0.15s ease-in;

  &:hover {
    text-decoration: none;
    box-shadow: none;
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }
`;

export default props => {
  return (
    <div css={footerStyle}>
      <Box p={[3, 4, 5]} align="left" color="white">
        <Flex
          flexWrap={["wrap", "wrap", "nowrap"]}
          justifyContent="space-between"
        >
          <Box width={[1, 1, 1 / 3]}>
            <Wrapper>
              <Flex
                justifyContent={["center", "center", "flex-start"]}
                mb={[2, 2, 0]}
              >
                <img src={Logo} height="50px" alt="Company Logo" />
              </Flex>
            </Wrapper>
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <Wrapper>
              <ul css={ulStyle}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of Service</Link>
                </li>
              </ul>
            </Wrapper>
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <WrapperLast>
              <ul css={socialList}>
                <li>
                  <a
                    title="Link to our Facebook page"
                    href={props.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {feather("facebook", ["30", "30"], mySvg)}
                  </a>
                </li>
                <li>
                  <a
                    title="Link to our Twitter account"
                    href={props.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {feather("twitter", ["30", "30"], mySvg)}
                  </a>
                </li>
                <li>
                  <a
                    title="Link to out Instragram account"
                    href={props.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {feather("instagram", ["30", "30"], mySvg)}
                  </a>
                </li>
                <li>
                  <a title="Our E-Mail address" href={`mailto:${props.email}`}>
                    {feather("mail", ["30", "30"], mySvg)}
                  </a>
                </li>
              </ul>
            </WrapperLast>
          </Box>
        </Flex>
      </Box>
      <p>{`Copyright © 2019 ${props.name}. All rights reserved.`}</p>
    </div>
  );
};
