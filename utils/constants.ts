import { CakeIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export type NavItem = {
  name: string;
  href: string;
  icon: unknown;
};

export const CONSTS = {
  TITLE: "LWCW 2025",
  DESCRIPTION:
    "[DEV INSTANCE] Berlin, Germany.",
  MULTIPLE_EVENTS: false,
  // If you have multiple events, add your events to the nav bar below
  // If you only have one event, you can leave the array empty
  // Find available icons at https://heroicons.com/
  NAV_ITEMS: [] as NavItem[],
};
