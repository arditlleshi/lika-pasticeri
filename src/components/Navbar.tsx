"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import logo from "../assets/logo/red-logo.png";
import MenuButton from "./MenuButton";
import MobileNav from "./MobileNav";
import { NavLink } from "./NavLink";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    return location === path;
  };

  const navLinks = [
    { path: "/", label: "Kreu" },
    { path: "/gallery", label: "Galeria" },
    { path: "/bar-menu", label: "Bar Menu" },
    { path: "/about-us", label: "Rreth Nesh" },
    { path: "/contact-us", label: "Kontakt" },
  ];

  const handleLinkClick = () => {
    if (ref.current) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      ref={ref}
      className="fixed z-50 w-full bg-white/80 shadow-lg backdrop-blur-md"
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
          isOpen ? "bg-white" : ""
        }`}
      >
        <div className="relative flex h-20 items-center justify-between">
          <Link
            href="/"
            scroll={false}
            className="absolute left-0 right-0 flex w-full items-center justify-center md:static md:w-auto md:justify-start"
            onClick={handleLinkClick}
          >
            <Image src={logo} alt="Pastiçeri Lika" className="h-12 w-52" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={handleLinkClick}
                  className={`${
                    isActive(path)
                      ? "bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent"
                      : "text-gray-900"
                  } group relative transition-colors hover:text-rose-600`}
                >
                  {label}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-rose-600 to-rose-500 transition-all duration-300 ease-out group-hover:w-full"></div>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="absolute right-0 md:hidden">
            <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileNav
        isOpen={isOpen}
        onClose={handleLinkClick}
        navLinks={navLinks}
      />
    </nav>
  );
};

export default Navbar;
