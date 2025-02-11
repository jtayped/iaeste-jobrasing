import React from "react";
import { Sidebar } from "../ui/sidebar";
import SidebarHeader from "./header";
import SidebarContent from "./content";
import SidebarFooter from "./footer";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
