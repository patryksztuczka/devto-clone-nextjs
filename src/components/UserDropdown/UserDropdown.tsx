import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState, useRef } from "react";

import { userDropdownOptions } from "../../constants/constants";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { IUserDropdownProps } from "./UserDropdown.types";

const UserDropdown = ({ session }: IUserDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClose = () => {
    setIsOpen(false);
  };

  useDetectOutsideClick(dropdownRef, handleDropdownClose);

  return (
    <div ref={dropdownRef} className="relative">
      <img
        src={session.user?.image || ""}
        className="h-10 w-10 cursor-pointer rounded-full"
        alt="profile"
        onClick={handleDropdownToggle}
      />
      {isOpen && (
        <div className="absolute top-[52px] right-0 flex w-[calc(100vw-16px)] flex-col rounded-md bg-white p-2 shadow-dropdown lg:w-60">
          <div className="flex w-full border-b-[1px] border-b-borderGrey pb-2">
            <span className="w-full cursor-pointer rounded-md px-4 py-2 font-medium hover:bg-lightBlue hover:text-blue hover:underline">
              <Link
                href={`/${session?.user?.username}`}
                onClick={handleDropdownClose}
              >
                {session.user?.name}
              </Link>
            </span>
          </div>
          <div className="flex w-full flex-col border-b-[1px] border-b-borderGrey py-2">
            {userDropdownOptions.map((option) => (
              <span
                key={option.route}
                className="w-full cursor-pointer rounded-md px-4 py-2 hover:bg-lightBlue hover:text-blue hover:underline"
              >
                {option.label}
              </span>
            ))}
          </div>
          <div className="flex w-full pt-2">
            <button
              className="flex w-full cursor-pointer rounded-md px-4 py-2 hover:bg-lightBlue hover:text-blue hover:underline"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
