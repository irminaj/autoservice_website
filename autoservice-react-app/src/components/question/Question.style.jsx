import { styled } from "styled-components";

export const QuestionContainerWrapperStyle = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const QuestionContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuestionTextStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.t2};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const AnswerStyle = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: ${(props) => props.theme.fontSizes.p1};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;
