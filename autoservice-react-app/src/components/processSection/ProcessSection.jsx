import React from "react";
import {
  ProcessSectionDescriptionStyle,
  ProcessSectionHeadingStyle,
  ProcessSectionLeftContainerStyle,
  ProcessSectionRightContainerStyle,
  ProcessSectionWrapperStyle,
} from "./ProcessSection.style";
import { PrimaryButton } from "../buttons/primaryButton/PrimaryButton";
import { Process } from "../process/Process";

export const ProcessSection = () => {
  return (
    <ProcessSectionWrapperStyle>
      <ProcessSectionLeftContainerStyle>
        <ProcessSectionHeadingStyle>We follow a clear process to help you out.</ProcessSectionHeadingStyle>
        <ProcessSectionDescriptionStyle>
          Through True Rich Attended does not end it his mother since real had half every him case in packages enquire
        </ProcessSectionDescriptionStyle>
        <PrimaryButton text={"Learn more"} />
      </ProcessSectionLeftContainerStyle>
      <ProcessSectionRightContainerStyle>
        <Process />
      </ProcessSectionRightContainerStyle>
    </ProcessSectionWrapperStyle>
  );
};
