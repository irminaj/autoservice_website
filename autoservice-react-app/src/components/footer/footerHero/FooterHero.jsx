import React from "react";
import {
  FooterHeroContainerStyle,
  FooterHeroWrapperStyle,
  IconsContainerStyle,
  LeftFooterHeadingStyle,
  LeftFooterStyle,
  RightFooterInformationStyle,
  RightFooterStyle,
  RightFooterTextStyle,
  RightFooterTitleStyle,
} from "./FooterHero.style";
import FacebookIcon from "../../../assets/icons/socialIcons/FacebookIcon.svg";
import TwitterIcon from "../../../assets/icons/socialIcons/TwitterIcon.svg";
import InstagramIcon from "../../../assets/icons/socialIcons/InstagramIcon.svg";
import LinkedinIcon from "../../../assets/icons/socialIcons/LinkedinIcon.svg";

export const FooterHero = () => {
  return (
    <FooterHeroWrapperStyle>
      <FooterHeroContainerStyle>
        <LeftFooterStyle>
          <LeftFooterHeadingStyle>Get in touch with us for your service</LeftFooterHeadingStyle>
          <IconsContainerStyle>
            <img src={FacebookIcon} alt="Facebook icon" />
            <img src={TwitterIcon} alt="Twitter icon" />
            <img src={InstagramIcon} alt="Instagram icon" />
            <img src={LinkedinIcon} alt="LinkedIn icon" />
          </IconsContainerStyle>
        </LeftFooterStyle>
        <RightFooterStyle>
          <RightFooterInformationStyle>
            <RightFooterTitleStyle>Help line number</RightFooterTitleStyle>
            <RightFooterTextStyle>1800 265 24 52</RightFooterTextStyle>
          </RightFooterInformationStyle>
          <RightFooterInformationStyle>
            <RightFooterTitleStyle>Address</RightFooterTitleStyle>
            <RightFooterTextStyle>NH 234 Public Square San Francisco 65368</RightFooterTextStyle>
          </RightFooterInformationStyle>
          <RightFooterInformationStyle>
            <RightFooterTitleStyle>We are open</RightFooterTitleStyle>
            <RightFooterTextStyle>Monday to Friday 9:00 AM to  10:00  AM</RightFooterTextStyle>
          </RightFooterInformationStyle>
        </RightFooterStyle>
      </FooterHeroContainerStyle>
    </FooterHeroWrapperStyle>
  );
};
