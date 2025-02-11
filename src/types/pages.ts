import { type LucideIcon } from "lucide-react";

export interface Action {
  icon: LucideIcon;
  function: () => void;
}

export interface Page {
  name: string;
  icon: LucideIcon;
  href: string;
  action?: Action;
}
