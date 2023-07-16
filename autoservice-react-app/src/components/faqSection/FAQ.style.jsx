import { styled } from "styled-components";

export const FaqSectionWrapperStyle = styled.div`
  background-color: ${(props) => props.theme.colors.steelGrey};
  padding: 60px;
`;

export const FaqContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

export const AnswerTextStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p1};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  width: 80%;
`;
