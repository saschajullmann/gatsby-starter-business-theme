import React from "react";
import { css } from "@emotion/core";

const listStyle = css`
  list-style-type: none;
  margin: 0;

  & h1 {
    color: inherit;
    text-decoration: underline;
  }

  & a {
    color: black;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.15s ease-in;
    transition: color 0.15s ease-in;

    &:hover {
      text-decoration: none;
      box-shadow: none;
      opacity: 0.5;
      transition: opacity 0.15s ease-in;
    }
  }
`;

export const List = ({ children }) => {
  return <ul css={listStyle}>{children}</ul>;
};
