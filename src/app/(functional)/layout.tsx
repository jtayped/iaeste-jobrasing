import React from "react";
import AppSidebar from "@/components/sidebar";
import FunctionalProviders from "./providers";
import GeneralLayout from "@/components/layouts/general";
import AppHeader from "@/components/header";

const FunctionalLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <FunctionalProviders>
      <AppSidebar />
      <GeneralLayout>
        <AppHeader />
        <main className="mt-7">{children}</main>
      </GeneralLayout>
    </FunctionalProviders>
  );
};

export default FunctionalLayout;
