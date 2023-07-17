import React from "react";
import WhiteLogo from "../../../assets/WhiteLogo.svg";
import { BottomNavigationWrapperStyle, NavigationIconStyle, LinksContainerStyle, BottomNavigationContainerStyle, StyledLink, CopyrightTextStyle } from "./BottomNavbar.style";

export const BottomNavbar = () => {
  return (
    <BottomNavigationWrapperStyle>
      <BottomNavigationContainerStyle>
        <NavigationIconStyle src={WhiteLogo} alt="Logo" />
        <LinksContainerStyle>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About us</StyledLink>
          <StyledLink to="/services">Services</StyledLink>
          <StyledLink to="/blog">Blog</StyledLink>
          <StyledLink to="/contact">Contact us</StyledLink>
        </LinksContainerStyle>
        <CopyrightTextStyle>@ Copyright Finsweet 2021</CopyrightTextStyle>
      </BottomNavigationContainerStyle>
    </BottomNavigationWrapperStyle>
  );
};
