import React from "react";
import GeneralLayout from "./general";
import { cn } from "@/lib/utils";

const CenteredLayout = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <GeneralLayout
      className={cn("flex items-center justify-center", className)}
    >
      {children}
    </GeneralLayout>
  );
};

export default CenteredLayout;
