"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={25} />
      </Link>

      {/* Mobile Menu Icon */}
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu (Hidden by default) */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        // } lg:hidden absolute top-0 left-0 w-full text-center bg-white text-main p-5`}
        } lg:hidden absolute top-0 left-0 w-full text-center bg-main p-5`}
      >
        {/* Close Button */}
        <button
          className="text-white absolute top-4 right-4 text-2xl cursor-pointer"
          onClick={closeMobileMenu}
        >
          &times;
        </button>

        {/* Mobile Menu Links */}
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="block text-white py-2 hover:font-bold"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Web View Menu */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Web View Contact Us Button */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Contact Us"
          icon="/navbar/telephone.png"
          variant="btn_dark_blue"
        />
      </div>
    </nav>
  );
};

export default Navbar;
