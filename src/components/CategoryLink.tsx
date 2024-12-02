'use client'

import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";

interface CategoryLinkProps {
  searchName: string;
  children: React.ReactNode;
}

export default function CategoryLink({ searchName, children }: CategoryLinkProps) {
  return (
    <Link
      href={{
        pathname: "/gallery",
        query: { category: encodeURIComponent(searchName) },
      }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="group inline-flex items-center text-rose-600 transition-colors hover:text-rose-700"
    >
      {children}
      <ChevronRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
