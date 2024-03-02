import React from "react";
import logo from "@/images/aflux-logo.png";
import { HEADER_LINKS } from "@/constants/header-links";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex bg-green-600 w-full justify-center">
      <div className="flex flex-col container mx-xl lg:py-4 justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="mt-6 lg:mt-0">
            <a className="inline-flex bg-white p-2 mx-4 rounded-lg" href="/">
              <img src={logo.src} alt="logo" width={48} />
            </a>
          </div>
          <div>
            <ul className="flex flex-wrap m-4 text-center flex-row items-center justify-between">
              {HEADER_LINKS.map((link) => (
                <Link
                  className="p-4 text-sm text-white hover:text-black"
                  href={link.href}
                  key={link.key}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <p className="text-sm m-4 text-white">Aflux © 2024</p>
          <p className="text-sm m-4 text-white">
            Coded with ❤️ by{" "}
            <a
              className="hover:text-black"
              href="https://goldipl.github.io/Marcin-Programuje/"
            >
              goldipl
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
