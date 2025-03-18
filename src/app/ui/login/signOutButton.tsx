"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="z-20 h-auto min-w-[13ch] rounded-lg bg-secondaryColor from-green-300 via-blue-500 to-purple-600 px-6
        py-3 text-center text-sm font-semibold text-darkColor shadow duration-300 hover:bg-secondaryLight
        hover:bg-gradient-to-r hover:text-lightColor 2xl:text-base"
    >
      SignOut
    </button>
  );
}
