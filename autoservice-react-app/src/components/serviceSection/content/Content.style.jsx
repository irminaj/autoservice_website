import { styled } from "styled-components";

export const ContentContainerStyle = styled.div`
  width: 60%;
`;

export const FirstContentHeadingStyle = styled.h4`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const ContentTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContentParagraphStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p2};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  opacity: 60%;
`;

export const ContentTitleStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t2};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const LastParagraphContainerStyle = styled.div`
  display: flex;
  gap: 3%;
`;
