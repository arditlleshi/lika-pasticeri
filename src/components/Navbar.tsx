"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import logo from "../assets/logo/red-logo.png";
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            scroll={false}
            className="flex w-full items-center justify-center md:w-auto md:justify-start"
            onClick={handleLinkClick}
          >
            <Image src={logo} alt="Pastiçeri Lika" className="h-12 w-52" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  scroll={false}
                  onClick={handleLinkClick}
                  className={`${
                    isActive(path)
                      ? "bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent"
                      : "text-gray-900"
                  } group relative transition-colors hover:text-rose-600`}
                >
                  {label}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-rose-600 to-rose-500 transition-all duration-300 ease-out group-hover:w-full"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 bg-white/90 px-2 pb-3 pt-2 backdrop-blur-md sm:px-3">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                onClick={handleLinkClick}
                className={`block px-3 py-2 ${
                  isActive(path)
                    ? "bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent"
                    : "text-gray-900"
                } hover:text-rose-600`}
              >
                {label}
              </Link>
            ))}
            {/* <button className="flex w-full items-center rounded-full bg-gradient-to-r from-rose-600 to-rose-500 px-4 py-2 text-white hover:from-rose-700 hover:to-rose-600">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Order Now
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
