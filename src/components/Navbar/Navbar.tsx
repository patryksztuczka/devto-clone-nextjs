import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

import MenuIcon from "../../assets/icons/MenuIcon/MenuIcon";
import {
  loggedUserMenuOptions,
  unloggedUserMenuOptions,
} from "../../constants/constants";
import useIsMobile from "../../hooks/useIsMobile";
import CreateAccountButton from "../CreateAccountButton/CreateAccountButton";
import CreatePostButton from "../CreatePostButton/CreatePostButton";
import LogInButton from "../LogInButton/LogInButton";
import MobileSideMenu from "../MobileSideMenu/MobileSideMenu";
import UserDropdown from "../UserDropdown/UserDropdown";

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-10 m-auto flex h-14 justify-center bg-white pl-4 pr-2 shadow-header">
      <div className=" flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          {isMobile && (
            <div onClick={() => setIsMenuOpen(true)}>
              <MenuIcon />
            </div>
          )}
          {isMenuOpen && isMobile && (
            <MobileSideMenu
              handleMenuClose={handleMenuClose}
              options={
                session ? loggedUserMenuOptions : unloggedUserMenuOptions
              }
            />
          )}
          <div>
            <Link href="/">
              <img
                className="h-10 w-[50px]"
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        {session && (
          <div className="flex items-center gap-4">
            <CreatePostButton />
            <UserDropdown />
          </div>
        )}
        {!session && (
          <div className="flex items-center gap-4">
            <LogInButton />
            <CreateAccountButton />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
