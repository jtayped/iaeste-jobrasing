import { cn } from "@/lib/utils";
import React from "react";

const GeneralLayout = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("min-h-screen p-10", className)}>{children}</div>;
};

export default GeneralLayout;
