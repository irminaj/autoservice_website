import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const LinkContainerStyle = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
`;

export const LinkTextStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p1};
  font-weight: ${(props) => props.theme.fontSizes.semiBold};
  padding-left: 60px;
  padding-right: 30px;
`;
