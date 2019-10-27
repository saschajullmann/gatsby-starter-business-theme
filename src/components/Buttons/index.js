import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import colors from "../../utils/colors.js";

const basicButton = css`
  width: 100%;
  text-align: center;
  padding: 1rem 3rem;
  font-weight: 600;
  transition: all 0.3s ease 0s;
  border: 2px solid ${colors.black};
`;

const primaryButton = css`
  ${basicButton}
  color: white;
  background-color: ${colors.black};

  &:hover {
    cursor: pointer;
    color: ${colors.black};
    background-color: white;
  }
`;

const secondaryButton = css`
  ${basicButton}
  color: ${colors.black}
  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${colors.black};
  }
`;

export const PrimaryButton = ({ children }) => {
  return <div css={primaryButton}>{children}</div>;
};

export const SecondaryButton = ({ children }) => {
  return <div css={secondaryButton}>{children}</div>;
};

export const ButtonRow = styled.div`
  width: 100%;

  @media (min-width: 500px) {
    width: 60%;
  }

  @media (min-width: 1000px) {
    margin: 0 auto;
    width: 33%;
  }
`;
