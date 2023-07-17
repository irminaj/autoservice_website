import React from "react";
import {
  SidebarContainerStyle,
  TopSidebarContainerStyle,
  BottomSidebarContainerStyle,
  TopSidebarTitleStyle,
  BottomSidebarItemContainerStyle,
  BottomSidebarTextContainerStyle,
  BottomSidebarIconStyle,
  BottomSidebarTitleStyle,
  BottomSidebarDescriptionStyle,
} from "./Sidebar.style";
import { IconBox } from "../../iconBox/regularIconBox/IconBox";
import CarIcon from "../../../assets/offerIcons/CarIcon.svg";
import EngineIcon from "../../../assets/offerIcons/EngineIcon.svg";
import BatteryIcon from "../../../assets/offerIcons/BatteryIcon.svg";
import FeatureServiceIcon from "../../../assets/icons/featureIcons/FeatureServiceIcon.svg";
import FeatureMechanicIcon from "../../../assets/icons/featureIcons/FeatureMechanicIcon.svg";
import FeaturePriceIcon from "../../../assets/icons/featureIcons/FeaturePriceIcon.svg";

export const Sidebar = () => {
  return (
    <SidebarContainerStyle>
      <TopSidebarContainerStyle>
        <TopSidebarTitleStyle>Other services</TopSidebarTitleStyle>
        <IconBox source={EngineIcon} title={"Engine Repair"} />
        <IconBox source={CarIcon} title={"Car Wash"} />
        <IconBox source={BatteryIcon} title={"Batteries"} />
      </TopSidebarContainerStyle>
      <BottomSidebarContainerStyle>
        <BottomSidebarItemContainerStyle>
          <BottomSidebarIconStyle src={FeatureServiceIcon} />
          <BottomSidebarTextContainerStyle>
            <BottomSidebarTitleStyle>Convenient service</BottomSidebarTitleStyle>
            <BottomSidebarDescriptionStyle>Through True Rich Attended does no end it his mother since real had half every him.</BottomSidebarDescriptionStyle>
          </BottomSidebarTextContainerStyle>
        </BottomSidebarItemContainerStyle>
        <BottomSidebarItemContainerStyle>
          <BottomSidebarIconStyle src={FeatureMechanicIcon} />
          <BottomSidebarTextContainerStyle>
            <BottomSidebarTitleStyle>Expert mechanics</BottomSidebarTitleStyle>
            <BottomSidebarDescriptionStyle>Through True Rich Attended does no end it his mother since real had half every him.</BottomSidebarDescriptionStyle>
          </BottomSidebarTextContainerStyle>
        </BottomSidebarItemContainerStyle>
        <BottomSidebarItemContainerStyle>
          <BottomSidebarIconStyle src={FeaturePriceIcon} />
          <BottomSidebarTextContainerStyle>
            <BottomSidebarTitleStyle>Transparent pricing</BottomSidebarTitleStyle>
            <BottomSidebarDescriptionStyle>Through True Rich Attended does no end it his mother since real had half every him.</BottomSidebarDescriptionStyle>
          </BottomSidebarTextContainerStyle>
        </BottomSidebarItemContainerStyle>
      </BottomSidebarContainerStyle>
    </SidebarContainerStyle>
  );
};
