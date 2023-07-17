import React from "react";
import {
  FirstHowSectionContainerStyle,
  FirstHowSectionLeftContainerStyle,
  FirstHowSectionHeadingStyle,
  FirstHowSectionListContainerStyle,
  FirstHowSectionListItemStyle,
  FirstHowSectionRightContainerStyle,
} from "./FirstHowSection.style";
import CheckmarkIcon from "../../assets/CheckmarkIcon.svg";
import HowImage1 from "../../assets/images/HowImage1.jpg";
import HowImage2 from "../../assets/images/HowImage2.jpg";

export const FirstHowSection = () => {
  return (
    <FirstHowSectionContainerStyle>
      <FirstHowSectionLeftContainerStyle>
        <FirstHowSectionHeadingStyle>How we work and the process we follow</FirstHowSectionHeadingStyle>
        <FirstHowSectionListContainerStyle>
          <img src={CheckmarkIcon} alt="Checkmark icon" />
          <FirstHowSectionListItemStyle>Through True Rich Attended does no end it his mother since</FirstHowSectionListItemStyle>
        </FirstHowSectionListContainerStyle>
        <FirstHowSectionListContainerStyle>
          <img src={CheckmarkIcon} alt="Checkmark icon" />
          <FirstHowSectionListItemStyle>Attended does no end it his mother since real had half every</FirstHowSectionListItemStyle>
        </FirstHowSectionListContainerStyle>
        <FirstHowSectionListContainerStyle>
          <img src={CheckmarkIcon} alt="Checkmark icon" />
          <FirstHowSectionListItemStyle>Since real had half every him case in packages enquire we up ecstatic</FirstHowSectionListItemStyle>
        </FirstHowSectionListContainerStyle>
      </FirstHowSectionLeftContainerStyle>
      <FirstHowSectionRightContainerStyle>
        <img src={HowImage1} />
        <img src={HowImage2} />
      </FirstHowSectionRightContainerStyle>
    </FirstHowSectionContainerStyle>
  );
};
