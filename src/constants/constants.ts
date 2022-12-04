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

export const dummyPosts = [
  {
    id: 1,
    title: "How join works internally in SQL",
    tags: ["sql", "database"],
    reactions: 58,
    comments: 12,
    timestamp: "03/12/2020",
    author: "John Doe",
  },
];
