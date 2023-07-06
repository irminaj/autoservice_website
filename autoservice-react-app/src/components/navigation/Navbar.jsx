import React from "react";
import logo from "../../assets/Logo.svg";
import { NavigationContainerStyle, NavigationIconStyle, NavigationLinksListStyle } from "./Navbar.style";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavigationContainerStyle>
      <NavigationIconStyle src={logo} />
      <div>
        <NavigationLinksListStyle>
          <li>
            <Link to="/">Home</Link>
            Home
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </NavigationLinksListStyle>
        <div></div>
      </div>
    </NavigationContainerStyle>
  );
};
