"use client";

import { Cake, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import { useState, useEffect } from "react";

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  const [year, setYear] = useState<number | undefined>(undefined);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-footer-gradient text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <div className="mb-6 flex items-center md:-mt-1.5">
              <div className="rounded-lg bg-gradient-to-r from-rose-600 to-rose-500 p-2">
                <Cake className="h-6 w-6 text-white" />
              </div>
              <span className="ml-2 bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text font-serif text-xl font-bold text-transparent">
                Pastiçeri Lika
              </span>
            </div>
            <p className="mb-6 text-gray-300">
              Lider i padiskutueshëm në tregtimin e ëmbëlsirave, me praninë tonë
              në mbarë Shqipërinë dhe Kosovë. Eksperienca jonë shumëvjeçare
              garanton cilësi, korrektësi dhe një gamë të pasur produktesh të
              ëmbla për çdo shije.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/lika_pasticeri"
                target="_blank"
                className="text-gray-400 transition-colors hover:text-rose-500"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.facebook.com/@lika.pasticeri"
                target="_blank"
                className="text-gray-400 transition-colors hover:text-rose-500"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.tiktok.com/@lika_pasticeri"
                target="_blank"
                className="text-gray-400 transition-colors hover:text-rose-500"
              >
                <TikTokIcon />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-lg font-semibold text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className={`transition-colors hover:text-rose-500 ${pathname == "/" ? "text-rose-500" : "text-gray-300"}`}
                >
                  Kreu
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className={`transition-colors hover:text-rose-500 ${pathname == "/gallery" ? "text-rose-500" : "text-gray-300"}`}
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`transition-colors hover:text-rose-500 ${pathname == "/about-us" ? "text-rose-500" : "text-gray-300"}`}
                >
                  Rreth Nesh
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={`transition-colors hover:text-rose-500 ${pathname == "/contact-us" ? "text-rose-500" : "text-gray-300"}`}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-lg font-semibold text-transparent">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Phone className="mr-3 h-5 w-5 text-rose-500" />
                <span>+355 67 400 4072</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="mr-3 h-5 w-5 text-rose-500" />
                <span>+355 69 874 3912</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="mr-3 h-5 w-5 text-rose-500" />
                <a href="mailto:info@pasticerilika.al">info@pasticerilika.al</a>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="mr-3 h-5 w-5 text-rose-500" />
                <span>Tirana, Albania</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="mb-6 bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-lg font-semibold text-transparent">
              Oraret
            </h4>
            <div className="space-y-2">
              <span className="text-gray-400">E Hënë - E Dielë</span>
              <p className="text-white">07:00 - 22:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © {year ?? ""} Pastiçeri Lika. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
