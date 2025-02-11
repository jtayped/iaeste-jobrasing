import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { type Metadata } from "next";
import RootProviders from "./providers";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "IAESTE Jobrasing",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({ weight: "variable", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <TRPCReactProvider>
          <RootProviders>{children}</RootProviders>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
