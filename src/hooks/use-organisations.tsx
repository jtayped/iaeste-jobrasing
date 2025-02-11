"use client";
import { api } from "@/trpc/react";
import { type Organisation } from "@prisma/client";
import React, { createContext } from "react";

interface OrganisationContextValue {
  myOrganisations: Organisation[] | undefined;
  selectedOrganisation: Organisation | undefined;
  isLoading: boolean;
  error: boolean;
}

const OrganisationContex = createContext<OrganisationContextValue | undefined>(
  undefined,
);

const OrganisationProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, error } =
    api.organisation.myOrganisations.useQuery();

  const value: OrganisationContextValue = {
    myOrganisations: data,
    selectedOrganisation: data ? data[0] : undefined,
    isLoading,
    error: !!error,
  };

  return (
    <OrganisationContex.Provider value={value}>
      {children}
    </OrganisationContex.Provider>
  );
};

export function useOrganisations() {
  const value = React.useContext(OrganisationContex);

  if (value === undefined) {
    throw new Error("useOrganisation must be used within OrganisationProvider");
  }

  return value;
}

export default OrganisationProvider;
