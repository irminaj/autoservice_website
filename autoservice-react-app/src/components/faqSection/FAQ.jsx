import React from "react";
import { Question } from "../question/Question";
import ContractIcon from "../../assets/icons/ContractIcon.svg";
import SpreadIcon from "../../assets/icons/SpreadIcon.svg";
import { AnswerTextStyle, FaqContainerStyle, FaqSectionWrapperStyle } from "./FAQ.style";

export const FAQ = () => {
  return (
    <FaqSectionWrapperStyle>
      <FaqContainerStyle>
        <h2>FQ</h2>
        <Question
          questionText={"How long should a car repair take?"}
          imgSrc={ContractIcon}
          imgDescription={"contract icon"}
          answerText={
            <AnswerTextStyle>
              "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I
              have got my car repaired at Finsweet"
            </AnswerTextStyle>
          }
        />
        <Question questionText={"How do I schedule my car's appointment ?"} imgSrc={SpreadIcon} imgDescription={"spread icon"} />
        <Question questionText={"What are the repair services provided?"} imgSrc={SpreadIcon} imgDescription={"spread icon"} />
        <Question questionText={"How do I find auto body shops near me?"} imgSrc={SpreadIcon} imgDescription={"spread icon"} />
      </FaqContainerStyle>
    </FaqSectionWrapperStyle>
  );
};
