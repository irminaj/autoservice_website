import React from "react";
import {
  ServicesSectionContainerStyle,
  ServicesSectionDescriptionStyle,
  ServicesSectionLeftStyle,
  ServicesSectionRightStyle,
  ServicesSectionTitleStyle,
  ServicesSectionWrapperStyle,
} from "./ServicesSection.style";
import { IconBox } from "../iconBox/regularIconBox/IconBox";
import CarIcon from "../../assets/offerIcons/CarIcon.svg";
import WhiteCarIcon from "../../assets/offerIcons/WhiteCarIcon.svg";
import EngineIcon from "../../assets/offerIcons/EngineIcon.svg";
import BodyIcon from "../../assets/offerIcons/BodyIcon.svg";
import BatteryIcon from "../../assets/offerIcons/BatteryIcon.svg";
import ServicesCar from "../../assets/images/ServicesCar.jpg";
import { ArrowLink } from "../arrowLink/ArrowLink";
import { SelectedIconBox } from "../iconBox/selectedIconBox/SelectedIconBox";

export const ServicesSection = () => {
  return (
    <ServicesSectionWrapperStyle>
      <ServicesSectionContainerStyle>
        <ServicesSectionLeftStyle>
          <img src={ServicesCar} />
          <ServicesSectionTitleStyle>Auto Diagnostics</ServicesSectionTitleStyle>
          <ServicesSectionDescriptionStyle>
            Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic. Through True Rich Attended does
            no end it his mother.
          </ServicesSectionDescriptionStyle>
          <ArrowLink text={"See service details"} linkTo={"/service"} />
        </ServicesSectionLeftStyle>
        <ServicesSectionRightStyle>
          <SelectedIconBox source={WhiteCarIcon} title={"Auto Diagnostics"} />
          <IconBox source={EngineIcon} title={"Engine Repair"} />
          <IconBox source={BodyIcon} title={"Body Work"} />
          <IconBox source={BatteryIcon} title={"Batteries"} />
          <IconBox source={CarIcon} title={"Car Wash"} />
          <IconBox source={EngineIcon} title={"AC Repair"} />
        </ServicesSectionRightStyle>
      </ServicesSectionContainerStyle>
    </ServicesSectionWrapperStyle>
  );
};
