import { styled } from "styled-components";

export const FormHeadingStyle = styled.h3`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;
