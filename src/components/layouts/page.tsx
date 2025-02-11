import React from "react";
import GeneralLayout from "./general";
import { cn } from "@/lib/utils";

const PageLayout = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <GeneralLayout className={cn("w-full md:w-[550px]", className)}>
      {children}
    </GeneralLayout>
  );
};

export default PageLayout;
