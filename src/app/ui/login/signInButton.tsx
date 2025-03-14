"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button
      onClick={() => signIn()}
      className="z-20 h-auto min-w-[13ch] rounded-lg bg-secondaryColor px-6 py-3 text-center text-sm 
        font-semibold text-darkColor shadow duration-300 hover:bg-secondaryLight hover:text-lightColor 2xl:text-base"
    >
      Sign in
    </button>
  );
}
