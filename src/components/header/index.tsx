import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import Breadcrumbs from "./breadcrumbs";

const AppHeader = () => {
  return (
    <header className="flex justify-between">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        <Breadcrumbs />
      </div>
    </header>
  );
};

export default AppHeader;
