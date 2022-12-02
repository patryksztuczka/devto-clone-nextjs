import React from "react";

import MenuIcon from "../../assets/icons/MenuIcon/MenuIcon";
import CreateAccountButton from "../CreateAccountButton/CreateAccountButton";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex h-14 w-screen items-center justify-between pl-4 pr-2 shadow-header">
      <div className="flex items-center">
        <div>
          <MenuIcon />
        </div>
        <div className="px-4">
          <a href="/">
            <img
              className="h-10 w-[50px]"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="logo"
            />
          </a>
        </div>
      </div>
      <CreateAccountButton />
    </header>
  );
};

export default Navbar;
