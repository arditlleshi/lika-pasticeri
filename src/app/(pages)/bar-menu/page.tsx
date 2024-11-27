// src/app/bar-menu/page.tsx

import { menuBarCategories, menuBarItems } from "../../../data/bar-menu-data";
import Image from "next/image";
import CategoryNavigation from "./CategoryNavigation";

interface BarMenuPageProps {
  searchParams: Promise<{ category?: string | string[] }>;
}

export default async function BarMenuPage({ searchParams }: BarMenuPageProps) {
  // Await the entire searchParams object
  const params = await searchParams;

  // Now safely access the category after searchParams is resolved
  const selectedCategoryId = Array.isArray(params.category)
    ? params.category[0]
    : params.category || "coffee"; // Default category

  const selectedCategory =
    menuBarCategories.find((cat) => cat.id === selectedCategoryId) ||
    menuBarCategories[0]; // Fallback to first category if not found

  const currentCategoryItems = menuBarItems[selectedCategory.id];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Dynamic Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={selectedCategory.image}
            // loading="lazy"
            fill
            priority
            alt={selectedCategory.name}
            className="w-full h-full object-cover transition-all duration-700 transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <span className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium">
            {selectedCategory.name} Menu
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
            {selectedCategory.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light">
            {selectedCategory.description}
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <CategoryNavigation selectedCategoryId={selectedCategory.id.toString()} />

      {/* Menu Items */}
      <div id="menu-items" className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-4">
          {currentCategoryItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    {index === 0 && (
                      <span className="px-2 py-0.5 bg-rose-100 text-rose-600 text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-medium text-rose-600 group-hover:scale-105 transition-transform duration-300">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
