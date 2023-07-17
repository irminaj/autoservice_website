import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const BottomNavigationWrapperStyle = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  padding: 80px 0;
`;

export const BottomNavigationContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

export const NavigationIconStyle = styled.img`
  width: 121px;
  color: ${(props) => props.theme.colors.white};
`;

export const LinksContainerStyle = styled.div`
  display: flex;
  gap: 30px;
  align-self: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p2};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const CopyrightTextStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p2};
  color: #939191;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;
