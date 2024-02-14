import React from "react";
import { HEADER_LINKS } from "@/constants/header-links";
import Link from "next/link";
import logo from "@/images/aflux-logo.png";

const Header = () => {
  return (
    <div className="fixed z-10 flex flex-row justify-center items-center w-screen bg-white h-[48px] top-[60px] shadow-sm shadow-green-600/10">
      <div className="flex flex-row justify-between items-center w-[60vw]">
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
  );
};

export default Header;
