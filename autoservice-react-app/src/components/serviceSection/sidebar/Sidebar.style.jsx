import { styled } from "styled-components";

export const SidebarContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  gap: 5%;
`;

export const TopSidebarContainerStyle = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const TopSidebarTitleStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t1};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const BottomSidebarContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const BottomSidebarItemContainerStyle = styled.div`
  display: flex;
  gap: 5%;
`;

export const BottomSidebarTextContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomSidebarIconStyle = styled.img`
  align-self: flex-start;
`;

export const BottomSidebarTitleStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  margin: 0;
`;
export const BottomSidebarDescriptionStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  padding-top: 10px;
  opacity: 60%;
  margin: 0;
`;
