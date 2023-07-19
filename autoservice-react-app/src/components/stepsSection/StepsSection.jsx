import React from "react";
import StepsSectionImg from "../../assets/images/StepsSectionImg.jpg";
import {
  StepsProcessContainerStyle,
  StepsSectionContainerStyle,
  StepsSectionDescriptionStyle,
  StepsSectionHeadingStyle,
  StepsSectionLeftContainerStyle,
  StepsSectionRightContainerStyle,
} from "./StepsSection.style";
// import { Process } from "../process/Process";

export const StepsSection = () => {
  return (
    <StepsSectionContainerStyle>
      <StepsSectionLeftContainerStyle>
        <StepsSectionHeadingStyle>We Provide Expert Service and aim to have a long term with you</StepsSectionHeadingStyle>
        <StepsSectionDescriptionStyle>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter</StepsSectionDescriptionStyle>
        <StepsProcessContainerStyle />
      </StepsSectionLeftContainerStyle>
      <StepsSectionRightContainerStyle>
        <img src={StepsSectionImg} />
      </StepsSectionRightContainerStyle>
    </StepsSectionContainerStyle>
  );
};
