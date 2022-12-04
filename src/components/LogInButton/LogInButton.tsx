import React from "react";
import { signIn } from "next-auth/react";

const LogInButton = () => {
  return (
    <button
      type="button"
      className="w-24 cursor-pointer rounded-md px-4 py-2 hover:bg-lightBlue hover:text-blue hover:underline"
      onClick={() => signIn()}
    >
      Log In
    </button>
  );
};

export default LogInButton;
