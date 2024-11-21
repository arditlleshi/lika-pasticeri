"use client";

import { useRef, useState } from "react";
import { menuBarCategories, menuBarItems } from "../../../data/bar-menu-data";
import Image from "next/image";

export default function BarMenu() {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof menuBarItems>("coffee");
  const currentCategory = menuBarCategories.find(
    (cat) => cat.id === selectedCategory
  );
  const menuItemsRef = useRef<HTMLDivElement>(null);

  // Ref for the category navigation container
  const categoryNavRef = useRef<HTMLDivElement>(null);

  // Array of refs for each category button
  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleCategoryClick = (
    categoryId: keyof typeof menuBarItems,
    index: number
  ) => {
    setSelectedCategory(categoryId);

    // Scroll to the menu items section
    if (menuItemsRef.current) {
      const headerOffset = 150;
      const elementPosition = menuItemsRef.current.getBoundingClientRect().top;
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

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Dynamic Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={currentCategory!.image}
            loading="lazy"
            fill
            alt={currentCategory!.name}
            className="w-full h-full object-cover transition-all duration-700 transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <span className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium">
            {currentCategory?.name} Menu
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
            {currentCategory?.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light">
            {currentCategory?.description}
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div
        ref={categoryNavRef}
        className="sticky top-20 bg-white/80 backdrop-blur-md shadow-sm z-40 border-b border-gray-200">
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
                onClick={() => handleCategoryClick(id, index)}
                className={`group flex items-center gap-2 px-6 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === id
                    ? "bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-lg shadow-rose-500/20"
                    : "bg-white/80 text-gray-700 hover:bg-gray-100 hover:shadow-md"
                }`}
                aria-pressed={selectedCategory === id}>
                <Icon
                  className={`h-4 w-4 transition-transform duration-300 ${
                    selectedCategory === id
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

      {/* Menu Items */}
      <div ref={menuItemsRef} className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-4">
          {menuBarItems[selectedCategory].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
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
