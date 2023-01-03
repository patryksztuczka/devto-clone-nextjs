import { Session } from "next-auth";

export interface IUserDropdownProps {
  session: Session;
}

export interface IUserDropdownOptions {
  label: string;
  route: string;
}
