import { User } from "@prisma/client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

import { userDropdownOptions } from "../../constants/constants";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";

const UserDropdown = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClose = () => {
    setIsOpen(false);
  };

  const handleGetUser = async () => {
    const response = await fetch(
      `http://localhost:3000/api/userById/${session.user?.id}`
    );
    const data = await response.json();
    setUser(data);
  };

  useDetectOutsideClick(dropdownRef, handleDropdownClose);

  useEffect(() => {
    handleGetUser();
  }, []);

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
            <Link
              href={`/${user?.username}`}
              className="flex w-full cursor-pointer rounded-md px-4 py-2 font-medium hover:bg-lightBlue hover:text-blue hover:underline "
            >
              <span className="">{session.user?.name}</span>
            </Link>
          </div>
          <div className="flex w-full flex-col border-b-[1px] border-b-borderGrey py-2">
            {userDropdownOptions.map((option) => (
              <span className="w-full cursor-pointer rounded-md px-4 py-2 hover:bg-lightBlue hover:text-blue hover:underline">
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
