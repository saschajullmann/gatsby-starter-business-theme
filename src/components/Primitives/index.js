import styled from "@emotion/styled";
import {
  space,
  layout,
  fontSize,
  color,
  textAlign,
  flexbox
} from "styled-system";

export const Box = styled.div`
  overflow: hidden;
  ${space}
  ${layout}
  ${fontSize}
  ${color}
  ${textAlign}
`;

export const Flex = styled.div`
  display: flex;
  ${flexbox}
  ${space}
`;

export const IndexTitle = styled.h1`
  ${fontSize}
  color: inherit;
  margin: 1.25rem 0;
`;

export const ContentWrapper = styled.div`
  max-width: 40em;

  & h1,
  h2 {
    color: inherit;
    margin-top: 0;
  }
`;
