"use client";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  const mounted = useMounted();

  // Render children without ThemeProvider during SSR
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
};

export default RootProviders;
