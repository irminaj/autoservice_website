import { styled } from "styled-components";

export const FirstHowSectionContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 80px 0;
  display: flex;
`;

export const FirstHowSectionLeftContainerStyle = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-right: 4%;
`;

export const FirstHowSectionHeadingStyle = styled.h3`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin: 0;
`;

export const FirstHowSectionListContainerStyle = styled.div`
  display: flex;
  gap: 3%;
`;

export const FirstHowSectionListItemStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const FirstHowSectionRightContainerStyle = styled.div`
  display: flex;
  width: 45%;
  gap: 3%;
`;
