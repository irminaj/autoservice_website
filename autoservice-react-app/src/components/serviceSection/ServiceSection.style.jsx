import { styled } from "styled-components";

export const ServiceSectionWrapperStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 80px 0;
`;

export const ServiceHeadingStyle = styled.h1`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h1};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const SidebarContentContainerStyle = styled.div`
  display: flex;
  gap: 50px;
`;
