"use client";
import React, { useState } from "react";
import { HEADER_LINKS } from "@/constants/header-links";
import Link from "next/link";
import logo from "@/images/aflux-logo.png";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      {/* mobile menu */}
      <div className="mobile-menu fixed z-30 w-full flex flex-col bg-white lg:hidden">
        <div className="inline-flex">
          <a
            className="inline-flex bg-white p-2 px-4 rounded-lg"
            href="https://goldipl.github.io/aflux-next/"
          >
            <img src={logo.src} alt="logo" width={48} />
          </a>
        </div>
        <div
          onClick={toggleMenu}
          className={`hamburger-icon space-y-2 absolute top-2 right-0 px-4 py-4 z-10 bg-white cursor-pointer
          ${openMenu ? "hidden" : ""}`}
        >
          <span className="block h-0.5 w-8 bg-green-600"></span>
          <span className="block h-0.5 w-8 bg-green-600"></span>
          <span className="block h-0.5 w-8 bg-green-600"></span>
        </div>

        <div onClick={toggleMenu}>
          <div className="absolute top-2 right-0 px-4 py-4">
            <svg
              className="h-8 w-8 text-green-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul
            className={`nav-mobile flex flex-col items-center justify-between min-h-[250px] pb-4
            ${openMenu ? "" : "hidden"}`}
          >
            {HEADER_LINKS.map((link) => (
              <Link
                className="p-4 uppercase text-green-600 hover:text-green-400 select-none"
                href={link.href}
                key={link.key}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {/* desktop menu */}
      <div className="hidden lg:flex desktop-menu fixed z-10 flex-row justify-center items-center w-screen bg-white h-[48px] top-[60px] shadow-sm shadow-green-600/10">
        <div className="flex flex-row justify-between items-center xl:w-[60vw]">
          <div>
            <a
              className="flex bg-white p-4 rounded-lg shadow-sm shadow-green-600/10"
              href="/"
            >
              <img src={logo.src} alt="logo" width={80} />
            </a>
          </div>
          <div>
            {HEADER_LINKS.map((link) => (
              <Link
                className="p-4 uppercase text-green-600 hover:text-green-400"
                href={link.href}
                key={link.key}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
