import { type Page } from "@/types/pages";
import { Home, Users } from "lucide-react";

const pages: Page[] = [
  {
    name: "Home",
    icon: Home,
    href: "/",
  },
  {
    name: "Participants",
    icon: Users,
    href: "/participants",
  },
];

export default pages;
