import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar";
import FunctionalProviders from "./providers";

const FunctionalLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <FunctionalProviders>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </FunctionalProviders>
  );
};

export default FunctionalLayout;
