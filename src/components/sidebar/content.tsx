import React from "react";
import { SidebarContent } from "../ui/sidebar";
import SidebarPages from "./groups/pages";

const SidebarContentComponent = () => {
  return (
    <SidebarContent>
      <SidebarPages />
    </SidebarContent>
  );
};

export default SidebarContentComponent;
