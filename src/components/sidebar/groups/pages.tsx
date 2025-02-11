import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import pages from "@/constants/pages";
import { type Page } from "@/types/pages";
import React from "react";

const SidebarPages = () => {
  const Page = ({ page }: { page: Page }) => {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href={page.href}>
            <page.icon />
            <span>{page.name}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Pages</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {pages.map((p) => (
            <Page key={p.href} page={p} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarPages;
