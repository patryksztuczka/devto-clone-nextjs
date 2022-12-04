import React from "react";

import { IDesktopSideMenuProps } from "./DesktopSideMenu.types";

const DesktopSideMenu = ({ options }: IDesktopSideMenuProps) => {
  return (
    <aside>
      <nav className="w-60">
        {options.map((option) => (
          <a
            href={option.route}
            key={option.route}
            className="flex cursor-pointer rounded-md p-2 hover:bg-lightBlue hover:text-blue hover:underline"
          >
            {option.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default DesktopSideMenu;
