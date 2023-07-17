import React from "react";
import {
  SecondHowSectionContainerStyle,
  SecondHowSectionDescriptionStyle,
  SecondHowSectionHeadingStyle,
  SecondHowSectionLeftContainerStyle,
  SecondHowSectionRightContainerStyle,
} from "./SecondHowSection.style";
import HowImage3 from "../../assets/images/HowImage3.jpg";
import HowImage4 from "../../assets/images/HowImage4.jpg";
import { PrimaryButton } from "../buttons/primaryButton/PrimaryButton";

export const SecondHowSection = () => {
  return (
    <SecondHowSectionContainerStyle>
      <SecondHowSectionLeftContainerStyle>
        <img src={HowImage3} />
        <img src={HowImage4} />
      </SecondHowSectionLeftContainerStyle>
      <SecondHowSectionRightContainerStyle>
        <SecondHowSectionHeadingStyle>Diagnose Car Problems If You Don’t Know Much About Cars</SecondHowSectionHeadingStyle>
        <SecondHowSectionDescriptionStyle>
          We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes everything from struts, shocks, and tie rod
          ends to ball joints, springs everything from struts, shocks, and tie rod ends to ball joints, springs
        </SecondHowSectionDescriptionStyle>
        <PrimaryButton text={"Book a service"} />
      </SecondHowSectionRightContainerStyle>
    </SecondHowSectionContainerStyle>
  );
};
