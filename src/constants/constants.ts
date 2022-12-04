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
