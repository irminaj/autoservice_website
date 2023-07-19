import React from "react";
import {
  ProcessListContainerStyle,
  ProcessListTitlteContainerStyle,
  ProcessListDescriptionContainerStyle,
  ProcessListItemStyle,
  CircleIconStyle,
  DottedLineIconStyle,
  ProcessTitleTextStyle,
  ProcessDescriptionTextStyle,
} from "./Process.style";
import Circle from "../../assets/Circle.svg";
import DottedLine from "../../assets/DottedLine.svg";

export const Process = () => {
  return (
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
          <ProcessTitleTextStyle>Book an Appointment</ProcessTitleTextStyle>
          <ProcessDescriptionTextStyle>Through True Rich Attended does no end it his mother since real had half every.</ProcessDescriptionTextStyle>
        </ProcessListDescriptionContainerStyle>
      </ProcessListItemStyle>
      <ProcessListItemStyle>
        <ProcessListTitlteContainerStyle>
          <CircleIconStyle src={Circle} alt={"circle icon"} />
        </ProcessListTitlteContainerStyle>
        <ProcessListDescriptionContainerStyle>
          <ProcessTitleTextStyle>Get your Service Done</ProcessTitleTextStyle>
          <ProcessDescriptionTextStyle>Through True Rich Attended does no end it his mother since real had half every.</ProcessDescriptionTextStyle>
        </ProcessListDescriptionContainerStyle>
      </ProcessListItemStyle>
    </ProcessListContainerStyle>
  );
};
