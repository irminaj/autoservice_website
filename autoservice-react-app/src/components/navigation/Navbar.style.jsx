import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainerStyle = styled.div`
  width: 80%;
  padding: 30px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const NavigationIconStyle = styled.img`
  width: 121px;
`;

export const RightNavigationStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavigationLinksListStyle = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 20px;
`;

export const NavigationLinksStyle = styled.li``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding-left: 20px;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p2};
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const AssistanceContainerStyle = styled.div`
  padding-left: 20px;
  display: flex;
`;
export const AssistanceIconStyle = styled.img`
  width: 40px;
  padding-right: 10px;
`;

export const AssistanceTextContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const AssistanceTextStyle = styled.p`
  margin: 0;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p2};
  color: #5b5b5b;
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

export const AssistancePhoneStyle = styled.p`
  margin: 0;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p1};
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;
