export interface IMobileSideMenuProps {
  options: ISideMenuOption[];
  handleMenuClose: () => void;
}

export interface ISideMenuOption {
  label: string;
  route: string;
}
