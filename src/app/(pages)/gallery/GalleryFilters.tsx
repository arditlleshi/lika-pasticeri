"use client";

import { Search, X } from "lucide-react"; // Import the X icon
import { useRouter, useSearchParams } from "next/navigation";
import FilterButton from "./FilterButton";
import SubcategoryButton from "./SubcategoryButton";
import { useRef, useState, useEffect } from "react";

interface GalleryFiltersProps {
  categories: string[];
  selectedCategory: string;
  subcategories: string[];
  selectedSubcategory: string;
  searchQuery: string;
}

export default function GalleryFilters({
  categories,
  selectedCategory,
  subcategories,
  selectedSubcategory,
  searchQuery: initialSearchQuery,
}: GalleryFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productsGridRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || "");

  // Update local state if initialSearchQuery changes
  useEffect(() => {
    setSearchQuery(initialSearchQuery || "");
  }, [initialSearchQuery]);

  const scrollToProductsGrid = () => {
    if (productsGridRef.current) {
      window.scrollTo({ top: 200, behavior: "smooth" });
    }
  };

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category !== "All") {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    params.delete("subcategory");

    router.push(`/gallery?${params.toString()}`, { scroll: false });
    scrollToProductsGrid();
  };

  const handleSubcategoryChange = (subcategory: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (subcategory) {
      params.set("subcategory", subcategory);
    } else {
      params.delete("subcategory");
    }

    router.push(`/gallery?${params.toString()}`, { scroll: false });
    scrollToProductsGrid();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/gallery?${params.toString()}`, { scroll: false });
  };

  const clearSearch = () => {
    setSearchQuery("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.push(`/gallery?${params.toString()}`, { scroll: false });
  };

  return (
    <div ref={productsGridRef} className="sticky top-20 z-40 border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Search Bar */}
          <div className="flex w-full items-center gap-4 md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                placeholder="Kërkoni produktin..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full text-gray-600 rounded-full border py-2 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-2 top-1/2  -translate-y-1/2 transform text-gray-400 hover:text-gray-600 focus:outline-none"
                  aria-label="Clear search"
                >
                  <X />
                </button>
              )}
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex w-full gap-2 overflow-x-auto pb-2 md:w-auto lg:pb-0">
            {categories.map((category) => (
              <FilterButton
                key={category}
                label={category}
                isSelected={selectedCategory === category}
                onClick={() => handleCategoryChange(category)}
              />
            ))}
          </div>
        </div>

        {/* Subcategories */}
        {subcategories.length > 0 && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:pb-0">
            {subcategories.map((subcategory) => (
              <SubcategoryButton
                key={subcategory}
                label={subcategory}
                isSelected={selectedSubcategory === subcategory}
                onClick={() => handleSubcategoryChange(subcategory)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
