import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar";
import FunctionalProviders from "./providers";
import GeneralLayout from "@/components/layouts/general";

const FunctionalLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <FunctionalProviders>
      <AppSidebar />
      <main>
        <GeneralLayout>
          <SidebarTrigger />
          {children}
        </GeneralLayout>
      </main>
    </FunctionalProviders>
  );
};

export default FunctionalLayout;
