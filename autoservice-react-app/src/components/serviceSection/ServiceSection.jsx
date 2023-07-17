import React from "react";
import { Content } from "./content/Content";
import { Sidebar } from "./sidebar/Sidebar";
import { ServiceSectionWrapperStyle, SidebarContentContainerStyle, ServiceHeadingStyle } from "./ServiceSection.style";

export const ServiceSection = () => {
  return (
    <ServiceSectionWrapperStyle>
      <ServiceHeadingStyle>Auto Diagnostics</ServiceHeadingStyle>
      <SidebarContentContainerStyle>
        <Sidebar />
        <Content />
      </SidebarContentContainerStyle>
    </ServiceSectionWrapperStyle>
  );
};
