import React from "react";
import {
  HeaderImageContainerStyle,
  HeaderImageStyle,
  HeaderTextContainer,
  HeaderTextStyle,
  HeaderWrapperStyle,
  WorkingHoursContainerStyle,
  WorkingHoursIconStyle,
  WorkingHoursLowerTextStyle,
  WorkingHoursTextContainerStyle,
  WorkingHoursTopTextStyle,
} from "./HomeHeader.style";
import HeaderImage from "../../assets/HeaderImage.svg";
import { PrimaryButton } from "../buttons/primaryButton/PrimaryButton";
import ClockIcon from "../../assets/ClockIcon.svg";

export const HomeHeader = () => {
  return (
    <HeaderWrapperStyle>
      <HeaderTextContainer>
        <HeaderTextStyle>Get your vehicle service done online at one place</HeaderTextStyle>
        <PrimaryButton text={"Book a service"} />
        <WorkingHoursContainerStyle>
          <WorkingHoursIconStyle src={ClockIcon} />
          <WorkingHoursTextContainerStyle>
            <WorkingHoursTopTextStyle>We are open</WorkingHoursTopTextStyle>
            <WorkingHoursLowerTextStyle>Monday to Friday 9:00 AM to 10:00 AM</WorkingHoursLowerTextStyle>
          </WorkingHoursTextContainerStyle>
        </WorkingHoursContainerStyle>
      </HeaderTextContainer>
      <HeaderImageContainerStyle>
        <HeaderImageStyle src={HeaderImage} />
      </HeaderImageContainerStyle>
    </HeaderWrapperStyle>
  );
};
