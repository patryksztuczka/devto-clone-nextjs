import { IArticle } from "./../types/Article";
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

export const dummyPosts: IArticle[] = [
  {
    id: 1,
    title: "How join works internally in SQL",
    tags: ["sql", "database"],
    reactions: 58,
    comments: 12,
    timestamp: "03/12/2020",
    author: "John Doe",
  },
  {
    id: 2,
    title: "How async/await works internally in JavaScript",
    tags: ["javascript", "webdev"],
    reactions: 33,
    comments: 4,
    timestamp: "05/12/2020",
    author: "Rick Sanchez",
  },
  {
    id: 3,
    title: "How async/await works internally in JavaScript",
    tags: ["javascript", "webdev"],
    reactions: 33,
    comments: 4,
    timestamp: "05/12/2020",
    author: "Rick Sanchez",
  },
  {
    id: 4,
    title: "How async/await works internally in JavaScript",
    tags: ["javascript", "webdev"],
    reactions: 33,
    comments: 4,
    timestamp: "05/12/2020",
    author: "Rick Sanchez",
  },
  {
    id: 5,
    title: "How async/await works internally in JavaScript",
    tags: ["javascript", "webdev"],
    reactions: 33,
    comments: 4,
    timestamp: "05/12/2020",
    author: "Rick Sanchez",
  },
  {
    id: 6,
    title: "How async/await works internally in JavaScript",
    tags: ["javascript", "webdev"],
    reactions: 33,
    comments: 4,
    timestamp: "05/12/2020",
    author: "Rick Sanchez",
  },
  {
    id: 7,
    title: "How async/await works internally in JavaScript",
    tags: ["javascript", "webdev"],
    reactions: 33,
    comments: 4,
    timestamp: "05/12/2020",
    author: "Rick Sanchez",
  },
];
