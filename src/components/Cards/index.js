import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import colors from "../../utils/colors.js";

const cardStyle = css`
  margin: 1em auto;
  padding: 1rem 1.5rem;

  & h2 {
    color: inherit;
    margin: 1.25rem 0;
  }
`;

const cardNormal = css`
  ${cardStyle};
  background-color: white;
`;

const cardInverted = css`
  ${cardStyle};
  background-color: ${colors.black};
`;

const teamStyle = css`
  ${cardStyle};
  padding: 0;
  margin: 0;
  margin-top: 1rem;
  background-color: ${colors.black};
  & img {
    width: 100%;
    margin: 0;
  }
`;

export const TeamDescription = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 1.5rem;

  & h2 {
    margin: 0;
  }

  & p {
    margin-top: 1rem;
  }

  & ul {
    margin: 0;
    display: flex;
    list-style-type: none;
  }

  & ul li {
    margin: 0;
    margin-left: 0.5rem;
  }

  & ul li:first-of-type {
    margin: 0;
  }
`;

export const TeamCard = ({ children }) => {
  return <div css={teamStyle}>{children}</div>;
};

export default ({ inverted, children }) => {
  return <div css={inverted ? cardInverted : cardNormal}>{children}</div>;
};
