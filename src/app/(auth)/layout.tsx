import CenteredLayout from "@/components/layouts/centered";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <CenteredLayout>{children}</CenteredLayout>;
};

export default AuthLayout;
