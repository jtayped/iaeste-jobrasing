import { SidebarProvider } from "@/components/ui/sidebar";
import OrganisationProvider from "@/hooks/use-organisations";
import { cookies } from "next/headers";
import React from "react";

const FunctionalProviders = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <OrganisationProvider>{children}</OrganisationProvider>
    </SidebarProvider>
  );
};

export default FunctionalProviders;
