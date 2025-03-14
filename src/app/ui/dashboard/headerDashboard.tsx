import React from "react";
import Link from "next/link";
import Image from "next/image";
import SignOutButton from "../login/signOutButton";
import logo from "../images/logoLight.png";

export default function HeaderDashboard({ login }: { login: boolean }) {
  return (
    <header className="fixed z-50 w-full bg-darkColor/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block" href="/">
          <Image src={logo} alt="logo FranckWebPro" width={40} height={40} />
        </Link>
        <div className="flex items-center justify-end gap-4">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="transition duration-300 text-lightColor hover:text-primaryLight"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-300 text-lightColor hover:text-primaryLight"
                  href="/#projects"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
          {login && <SignOutButton />}
        </div>
      </div>
    </header>
  );
}
