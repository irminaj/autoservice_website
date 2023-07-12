import { styled } from "styled-components";

export const ExperienceBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const ExperienceBoxHeadingStyle = styled.h2`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h2};
  font-weight: ${(props) => props.theme.fontWeight.extraBold};
  color: ${(props) => props.theme.colors.secondary};
  margin: 0;
`;

export const ExperienceBoxTitleStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  margin: 0;
`;
