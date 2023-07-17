import { styled } from "styled-components";

export const SecondHowSectionContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 80px 0;
  display: flex;
  gap: 150px;
`;

export const SecondHowSectionLeftContainerStyle = styled.div`
  display: flex;
  width: 45%;
  gap: 3%;
`;

export const SecondHowSectionRightContainerStyle = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: space-between;
`;

export const SecondHowSectionHeadingStyle = styled.h3`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin: 0;
`;

export const SecondHowSectionDescriptionStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p1};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  opacity: 60%;
  margin: 0;
`;
