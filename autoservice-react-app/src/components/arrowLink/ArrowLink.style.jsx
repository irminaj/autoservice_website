import { styled } from "styled-components";

export const LinkContainerStyle = styled.div`
  display: flex;
`;

export const LinkTextStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p1};
  font-weight: ${(props) => props.theme.fontSizes.semiBold};
  padding-left: 60px;
  padding-right: 30px;
`;
