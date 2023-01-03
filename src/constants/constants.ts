import { ISideMenuOption } from "../components/MobileSideMenu/MobileSideMenu.types";
import { IUserDropdownOptions } from "../components/UserDropdown/UserDropdown.types";

export const BREAKPOINTS = {
  mobile: 768,
};

export const userDropdownOptions: IUserDropdownOptions[] = [
  {
    label: "Dashboard",
    route: "/dashboard",
  },
  {
    label: "Create Post",
    route: "/new",
  },
  {
    label: "Reading List",
    route: "/reading-list",
  },
  {
    label: "Settings",
    route: "/settings",
  },
];

export const unloggedUserMenuOptions: ISideMenuOption[] = [
  {
    label: "🏠 Home",
    route: "/",
  },
];

export const loggedUserMenuOptions: ISideMenuOption[] = [
  {
    label: "🏠 Home",
    route: "/",
  },
  {
    label: "💖 Reading List",
    route: "/reading-list",
  },
];
