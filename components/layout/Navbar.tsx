"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { logo, menu } from "@/public";
import Button from "../common/Button";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src={logo} alt="Logo" width={74} height={29} />
      </Link>
      <ul className="hidden lg:flex gap-12 h-full">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flex">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src={menu}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setToggle((prev) => !prev)}
      />
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } flex-col bg-black-gradient absolute top-10 right-0 p-6 mx-4 my-2 min-w-[140px] rounded-xl bg-black/10 sidebar`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
