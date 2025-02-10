import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TRPCReactProvider } from "@/trpc/react";

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <TRPCReactProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </TRPCReactProvider>
  );
};

export default RootProviders;
