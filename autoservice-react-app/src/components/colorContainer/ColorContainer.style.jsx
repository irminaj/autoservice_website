import { styled } from "styled-components";

export const ColorContainerHeadingStyle = styled.h4`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.white};
  margin-top: 0;
`;

export const ColorContainerDescriptionStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  color: ${(props) => props.theme.colors.white};
  margin: 0;
`;
