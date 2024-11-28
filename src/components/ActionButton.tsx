"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import whatsAppIcon from "../assets/logo/whatsapp.png";


export default function ActionButton() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex flex-col gap-3">
        {pathname === "/bar-menu" ? (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <svg
              className="h-5 w-5 text-gray-600 transition-colors duration-300 group-hover:text-rose-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        ) : (
          <Link
            href="https://wa.me/355674004072?text=Përshëndetje,%20%20interesohem%20për%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={whatsAppIcon} alt="WhatsApp" width={50} height={50} />
          </Link>
        )}
      </div>
    </div>
  );
}
