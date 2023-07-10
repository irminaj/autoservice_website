import React from "react";
import {
  ProcessSectionDescriptionStyle,
  ProcessSectionHeadingStyle,
  ProcessSectionLeftContainerStyle,
  ProcessSectionRightContainerStyle,
  ProcessSectionWrapperStyle,
  ProcessListContainerStyle,
  ProcessListTitlteContainerStyle,
  ProcessListDescriptionContainerStyle,
  ProcessListItemStyle,
  CircleIconStyle,
  DottedLineIconStyle,
  ProcessTitleTextStyle,
  ProcessDescriptionTextStyle,
} from "./ProcessSection.style";
import { PrimaryButton } from "../buttons/primaryButton/PrimaryButton";
import Circle from "../../assets/Circle.svg";
import DottedLine from "../../assets/DottedLine.svg";

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
        <ProcessListContainerStyle>
          <ProcessListItemStyle>
            <ProcessListTitlteContainerStyle>
              <CircleIconStyle src={Circle} alt={"circle icon"} />
              <DottedLineIconStyle src={DottedLine} alt={"dotted line"} />
            </ProcessListTitlteContainerStyle>
            <ProcessListDescriptionContainerStyle>
              <ProcessTitleTextStyle>Get a Quote</ProcessTitleTextStyle>
              <ProcessDescriptionTextStyle>Through True Rich Attended does no end it his mother since real had half every.</ProcessDescriptionTextStyle>
            </ProcessListDescriptionContainerStyle>
          </ProcessListItemStyle>
          <ProcessListItemStyle>
            <ProcessListTitlteContainerStyle>
              <CircleIconStyle src={Circle} alt={"circle icon"} />
              <DottedLineIconStyle src={DottedLine} alt={"dotted line"} />
            </ProcessListTitlteContainerStyle>
            <ProcessListDescriptionContainerStyle>
              <ProcessTitleTextStyle>Get a Quote</ProcessTitleTextStyle>
              <ProcessDescriptionTextStyle>Through True Rich Attended does no end it his mother since real had half every.</ProcessDescriptionTextStyle>
            </ProcessListDescriptionContainerStyle>
          </ProcessListItemStyle>
          <ProcessListItemStyle>
            <ProcessListTitlteContainerStyle>
              <CircleIconStyle src={Circle} alt={"circle icon"} />
            </ProcessListTitlteContainerStyle>
            <ProcessListDescriptionContainerStyle>
              <ProcessTitleTextStyle>Get a Quote</ProcessTitleTextStyle>
              <ProcessDescriptionTextStyle>Through True Rich Attended does no end it his mother since real had half every.</ProcessDescriptionTextStyle>
            </ProcessListDescriptionContainerStyle>
          </ProcessListItemStyle>
        </ProcessListContainerStyle>
      </ProcessSectionRightContainerStyle>
    </ProcessSectionWrapperStyle>
  );
};
