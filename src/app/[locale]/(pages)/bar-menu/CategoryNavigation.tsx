"use client";

import { useEffect, useRef } from "react";
import { menuBarCategories } from "../../../../data/bar-menu-data";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "@/i18n/routing";
interface CategoryNavigationProps {
  selectedCategoryId: string;
}

export default function CategoryNavigation({
  selectedCategoryId,
}: CategoryNavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoryNavRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /**
   * Handler for category button clicks
   */
  const handleCategoryClick = (categoryId: string, index: number) => {
    // Update the URL without scrolling
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId !== "coffee") {
      params.set("category", categoryId);
    } else {
      params.delete("category");
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });

    // Smooth scroll to menu items with offset
    const menuItemsElement = document.getElementById("menu-items");
    if (menuItemsElement) {
      const headerOffset = 150; // Adjust based on your fixed header's height
      const elementPosition = menuItemsElement.getBoundingClientRect().top;
      const offsetPosition =
        window.pageYOffset + elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Center the clicked category button horizontally
    const button = categoryRefs.current[index];
    if (button && categoryNavRef.current) {
      button.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  /**
   * Effect to center the selected category button on initial load
   */
  useEffect(() => {
    const index = menuBarCategories.findIndex(
      (cat) => cat.id === selectedCategoryId,
    );
    if (index !== -1) {
      const button = categoryRefs.current[index];
      if (button && categoryNavRef.current) {
        button.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [selectedCategoryId]);

  return (
    <div
      ref={categoryNavRef}
      className="sticky top-20 bg-white/80 backdrop-blur-md shadow-sm z-40 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto gap-3 py-4 hide-scrollbar">
          {menuBarCategories.map(({ id, name, icon: Icon }, index) => (
            <button
              key={id}
              ref={(el) => {
                if (el) {
                  categoryRefs.current[index] = el;
                }
              }}
              onClick={() => handleCategoryClick(id.toString(), index)}
              className={`group flex items-center gap-2 px-6 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 ${
                selectedCategoryId === id
                  ? "bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-lg shadow-rose-500/20"
                  : "bg-white/80 text-gray-700 hover:bg-gray-100 hover:shadow-md"
              }`}
              aria-pressed={selectedCategoryId === id}
            >
              <Icon
                className={`h-4 w-4 transition-transform duration-300 ${
                  selectedCategoryId === id
                    ? "scale-105"
                    : "group-hover:scale-105"
                }`}
              />
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
