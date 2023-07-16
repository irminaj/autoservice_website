import React from "react";
import { QuestionContainerStyle, QuestionContainerWrapperStyle, QuestionTextStyle } from "./Question.style";

export const Question = ({ questionText, imgSrc, imgDescription, answerText }) => {
  return (
    <QuestionContainerWrapperStyle>
      <QuestionContainerStyle>
        <QuestionTextStyle>{questionText}</QuestionTextStyle>
        <img src={imgSrc} alt={imgDescription} />
      </QuestionContainerStyle>
      {answerText}
    </QuestionContainerWrapperStyle>
  );
};
