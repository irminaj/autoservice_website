import { styled } from "styled-components";

export const PrimaryButtonStyle = styled.button`
  max-width: max-content;
  padding: 16px 40px;
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p1};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  border-radius: 12px;
  border: none;
`;
