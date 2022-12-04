import { useSession } from "next-auth/react";
import { useState } from "react";

import MenuIcon from "../../assets/icons/MenuIcon/MenuIcon";
import CreateAccountButton from "../CreateAccountButton/CreateAccountButton";
import CreatePostButton from "../CreatePostButton/CreatePostButton";
import LogInButton from "../LogInButton/LogInButton";
import MobileSideMenu from "../MobileSideMenu/MobileSideMenu";
import UserDropdown from "../UserDropdown/UserDropdown";

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-10 flex h-14 w-screen items-center justify-between pl-4 pr-2 shadow-header xl:px-96">
      <div className="flex items-center gap-4">
        <div onClick={() => setIsMenuOpen(true)}>
          <MenuIcon />
        </div>
        {isMenuOpen && <MobileSideMenu handleMenuClose={handleMenuClose} />}
        <div>
          <a href="/">
            <img
              className="h-10 w-[50px]"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="logo"
            />
          </a>
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
    </header>
  );
};

export default Navbar;
