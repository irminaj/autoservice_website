import { styled } from "styled-components";

export const BrandsSectionContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  padding: 80px 0;
`;

export const BrandsSectionHeadingStyle = styled.h3`
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
