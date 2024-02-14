import React from "react";
import { HEADER_LINKS } from "@/constants/header-links";
import Link from "next/link";
import logo from "@/images/aflux-logo.png";

const Header = () => {
  return (
    <div className="fixed z-10 flex flex-row justify-center items-center w-screen">
      <div className="flex flex-row justify-between items-center w-[60vw] py-8">
        <div>
          <a className="" href="/">
            <img src={logo.src} alt="logo" width={80} />
          </a>
        </div>
        <div>
          {HEADER_LINKS.map((link) => (
            <Link
              className="p-4 uppercase text-white hover:text-green-500"
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
