import { styled } from "styled-components";

export const ServicesSectionWrapperStyle = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey};
  padding: 80px 0;
`;

export const ServicesSectionContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 5%;
`;

export const ServicesSectionLeftStyle = styled.div`
  background-color: white;
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 5%;
`;

export const ServicesSectionTitleStyle = styled.h3`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin-bottom: 0;
`;

export const ServicesSectionDescriptionStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  opacity: 60%;
`;

export const ServicesSectionRightStyle = styled.div`
  width: 45%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1 fr;
  gap: 3% 5%;
`;
