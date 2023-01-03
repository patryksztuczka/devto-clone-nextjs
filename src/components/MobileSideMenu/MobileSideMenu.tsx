import { useSession } from "next-auth/react";
import React, { useRef } from "react";

import CloseIcon from "../../assets/icons/CloseIcon/CloseIcon";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import CreateAccountButton from "../CreateAccountButton/CreateAccountButton";
import LogInButton from "../LogInButton/LogInButton";
import { IMobileSideMenuProps } from "./MobileSideMenu.types";

const MobileSideMenu = ({ options, handleMenuClose }: IMobileSideMenuProps) => {
  const { data: session } = useSession();
  const menuRef = useRef(null);
  useDetectOutsideClick(menuRef, handleMenuClose);

  return (
    <div className="absolute top-0 left-0 z-20 h-screen w-screen bg-overlay">
      <aside
        ref={menuRef}
        className="flex h-screen max-w-[300px] flex-col gap-4 bg-white px-2"
      >
        <header className="flex h-14 items-center justify-between pl-2 text-lg font-bold">
          DEV Community 🙍‍♀️🙍‍♂️
          <div
            className="flex h-10 w-10 items-center justify-center"
            onClick={handleMenuClose}
          >
            <CloseIcon />
          </div>
        </header>
        {!session && (
          <div className="flex flex-col gap-3 rounded-md bg-greyCard p-4 shadow-card">
            <h1 className="text-[18px] font-bold leading-tight">
              DEV Community 👩‍💻👨‍💻 is a community of 966,155 amazing developers
            </h1>
            <p>
              {`We're a place where coders share, stay up-to-date and grow their careers.`}
            </p>
            <div className="flex flex-col items-center">
              <CreateAccountButton />
              <LogInButton />
            </div>
          </div>
        )}
        <nav className="flex flex-col">
          {options.map((option) => (
            <a
              href={option.route}
              key={option.route}
              className="cursor-pointer rounded-md px-4 py-2 hover:bg-lightBlue hover:text-blue hover:underline"
            >
              {option.label}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default MobileSideMenu;
