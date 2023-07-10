import React from "react";
import logo from "../../assets/Logo.svg";
import {
  AssistanceContainerStyle,
  AssistanceIconStyle,
  AssistancePhoneStyle,
  AssistanceTextContainerStyle,
  AssistanceTextStyle,
  NavigationContainerStyle,
  NavigationIconStyle,
  NavigationLinksListStyle,
  NavigationLinksStyle,
  RightNavigationStyle,
  StyledLink,
} from "./Navbar.style";
import assistanceIcon from "../../assets/assistanceIcon.svg";
import line from "../../assets/Line.svg";

export const Navbar = () => {
  return (
    <NavigationContainerStyle>
      <NavigationIconStyle src={logo} />
      <RightNavigationStyle>
        <NavigationLinksListStyle>
          <NavigationLinksStyle>
            <StyledLink to="/">Home</StyledLink>
          </NavigationLinksStyle>
          <li>
            <StyledLink to="/about">About us</StyledLink>
          </li>
          <li>
            <StyledLink to="/services">Services</StyledLink>
          </li>
          <li>
            <StyledLink to="/blog">Blog</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contact</StyledLink>
          </li>
        </NavigationLinksListStyle>
        <img src={line} />
        <AssistanceContainerStyle>
          <AssistanceIconStyle src={assistanceIcon} />
          <AssistanceTextContainerStyle>
            <AssistanceTextStyle>Road Assistance</AssistanceTextStyle>
            <AssistancePhoneStyle>1800 265 24 52</AssistancePhoneStyle>
          </AssistanceTextContainerStyle>
        </AssistanceContainerStyle>
      </RightNavigationStyle>
    </NavigationContainerStyle>
  );
};
