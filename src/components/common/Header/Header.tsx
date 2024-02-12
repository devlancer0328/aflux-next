import React from "react";
import { HEADER_LINKS } from "@/constants/header-links";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div>Logo</div>
      <div>
        {HEADER_LINKS.map((link) => (
          <Link
            className="p-2 uppercase hover:text-green-500"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
