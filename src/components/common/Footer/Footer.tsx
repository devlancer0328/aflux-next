import React from "react";
import logo from "@/images/aflux-logo.png";
import { HEADER_LINKS } from "@/constants/header-links";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex bg-green-800 w-full justify-center">
      <div className="flex flex-col container mx-xl lg:py-4 justify-center items-center">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full">
          <div className="ms-4 mt-6 lg:mt-0 lg:ms-0">
            <a className="inline-flex bg-white p-2 mx-4 rounded-lg" href="/">
              <img src={logo.src} alt="logo" width={48} />
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="flex flex-wrap m-4 text-center flex-col lg:flex-row items-start lg:items-center justify-between lg:last:me-0">
              {HEADER_LINKS.map((link) => (
                <Link
                  className="px-4 py-2 text-sm text-white hover:text-orange-600"
                  href={link.href}
                  key={link.key}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full">
          <p className="text-xs lg:text-sm ms-8 mt-2 lg:m-4 text-white">
            Aflux © 2024. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-xs lg:text-sm ms-8 mb-4 lg:m-4 text-white">
            Coded with ❤️ by{" "}
            <a
              className="hover:text-orange-600"
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
