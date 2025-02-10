import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import RootProviders from "./providers";

export const metadata: Metadata = {
  title: "IAESTE Jobrasing",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
