"use client";
import React from "react";
import { SidebarFooter } from "../ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown, Plus } from "lucide-react";
import { useOrganisations } from "@/hooks/use-organisations";

const SidebarHeaderComponent = () => {
  const { selectedOrganisation, myOrganisations, isLoading, error } =
    useOrganisations();

  // TODO: modify these state
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  if (!myOrganisations) return;

  return (
    <SidebarFooter>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} className="justify-between">
            <div />
            {selectedOrganisation
              ? selectedOrganisation.name
              : "Select an organisation"}
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {myOrganisations.length > 0 ? (
            myOrganisations.map((o) => (
              <DropdownMenuItem key={o.id}></DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem asChild>
              <Button variant={"ghost"}>
                <Plus />
                Join an organisation
              </Button>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarFooter>
  );
};

export default SidebarHeaderComponent;
