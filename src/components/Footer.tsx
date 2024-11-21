"use client";

import { Cake, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  return (
    <footer className="bg-footer-gradient text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-10">
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
              Krijimi i momenteve të gëzimit me produktet tona të pjekura që nga
              viti 1995. Një traditë familjare e përkryerisë në çdo kafshim.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-rose-500"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-rose-500"
              >
                <Facebook className="h-6 w-6" />
              </a>
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
                  href="/pasticeri-lika"
                  className={`transition-colors hover:text-rose-500 ${pathname == "/pasticeri-lika" ? "text-rose-500" : "text-gray-300"}`}
                >
                  Kreu
                </Link>
              </li>
              <li>
                <Link
                  href="/pasticeri-lika/our-products"
                  className={`transition-colors hover:text-rose-500 ${pathname == "/pasticeri-lika/our-products" ? "text-rose-500" : "text-gray-300"}`}
                >
                  Produktet Tona
                </Link>
              </li>
              <li>
                <Link
                  href="/pasticeri-lika/gallery"
                  className={`transition-colors hover:text-rose-500 ${pathname == "/pasticeri-lika/gallery" ? "text-rose-500" : "text-gray-300"}`}
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href="/pasticeri-lika/about-us"
                  className={`transition-colors hover:text-rose-500 ${pathname == "/pasticeri-lika/about-us" ? "text-rose-500" : "text-gray-300"}`}
                >
                  Rreth Nesh
                </Link>
              </li>
              <li>
                <Link
                  href="/pasticeri-lika/contact-us"
                  className={`transition-colors hover:text-rose-500 ${pathname == "/pasticeri-lika/contact-us" ? "text-rose-500" : "text-gray-300"}`}
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
              Opening Hours
            </h4>
            <ul className="space-y-4">
              <li>
                <span className="text-gray-400">Monday - Friday</span>
                <p className="text-white">7:00 AM - 8:00 PM</p>
              </li>
              <li>
                <span className="text-gray-400">Saturday</span>
                <p className="text-white">8:00 AM - 9:00 PM</p>
              </li>
              <li>
                <span className="text-gray-400">Sunday</span>
                <p className="text-white">8:00 AM - 7:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Pastiçeri Lika. All rights reserved.
            </p>
            {/* <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-rose-400 transition-colors">
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rose-400 transition-colors">
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rose-400 transition-colors">
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
