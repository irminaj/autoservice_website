import React from "react";
import {
  ArrowLinkContainerStyle,
  OfferSectionContainerStyle,
  OfferSectionHeadingStyle,
  OfferSectionIconsContainerStyle,
  OfferSectionTitleStyle,
  OfferSectionWrapperStyle,
} from "./Offer.style";
import { IconBox } from "../iconBox/regularIconBox/IconBox";
import { SelectedIconBox } from "../iconBox/selectedIconBox/SelectedIconBox";
import CarIcon from "../../assets/offerIcons/CarIcon.svg";
import EngineIcon from "../../assets/offerIcons/EngineIcon.svg";
import WheelIcon from "../../assets/offerIcons/WheelIcon.svg";
import OilIcon from "../../assets/offerIcons/OilIcon.svg";
import BodyIcon from "../../assets/offerIcons/BodyIcon.svg";
import BatteryIcon from "../../assets/offerIcons/BatteryIcon.svg";
import InsuranceIcon from "../../assets/offerIcons/InsuranceIcon.svg";
import SettingsIcon from "../../assets/offerIcons/SettingsIcon.svg";
import { ArrowLink } from "../arrowLink/ArrowLink";

export const Offer = () => {
  return (
    <OfferSectionWrapperStyle>
      <OfferSectionContainerStyle>
        <OfferSectionTitleStyle>What we Offer</OfferSectionTitleStyle>
        <OfferSectionHeadingStyle>We offer full service auto repair & maintenance</OfferSectionHeadingStyle>
        <OfferSectionIconsContainerStyle>
          <IconBox source={CarIcon} title={"Diagnostics"} />
          <IconBox source={EngineIcon} title={"Engine Repair"} />
          <SelectedIconBox source={WheelIcon} title={"Wheel Repair"} />
          <IconBox source={OilIcon} title={"Oil Filter"} />
          <IconBox source={BodyIcon} title={"Body Work"} />
          <IconBox source={BatteryIcon} title={"Batteries"} />
          <IconBox source={InsuranceIcon} title={"Insurance Claim"} />
          <IconBox source={SettingsIcon} title={"Custom Service"} />
        </OfferSectionIconsContainerStyle>
        <ArrowLinkContainerStyle>
          <ArrowLink text={"Learn about services"} />
        </ArrowLinkContainerStyle>
      </OfferSectionContainerStyle>
    </OfferSectionWrapperStyle>
  );
};
