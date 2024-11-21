'use client';

import { Search } from "lucide-react";
import { useRef, useState, useEffect, useMemo } from "react";
import { cakeSubcategories, products, categoryMapping, categories } from "../../../data/gallery-data";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "../../../data/types";

export default function GalleryContent({ params }: { params: { category: string, subcategory: string } }) {
  const searchParams = params;
  const router = useRouter();
  const categoryFromParams = searchParams.category;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const productsGridRef = useRef<HTMLDivElement>(null);

  // Initialize windowWidth only on the client
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine if the current screen is large
  const isLargeScreen = windowWidth > 1024;

  // Determine if the selected category has subcategories
  const hasSubcategories = selectedCategory === "Cakes";

  // Calculate header height based on screen size and subcategories
  const headerHeight = isLargeScreen
    ? (hasSubcategories ? 197.6 : 150)
    : (hasSubcategories ? 260 : 210);

  // Helper function to scroll to the products grid
  const scrollToProductsGrid = () => {
    if (productsGridRef.current) {
      const elementRect = productsGridRef.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const offsetPosition = absoluteElementTop - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Effect to handle category changes from URL
  useEffect(() => {
    if (categoryFromParams) {
      const mappedCategory = categoryMapping[categoryFromParams];
      if (mappedCategory && categories.includes(mappedCategory)) {
        setSelectedCategory(mappedCategory);
        setSelectedSubcategory("");
        scrollToProductsGrid();
      } else {
        setSelectedCategory("All");
        setSelectedSubcategory("");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFromParams]);

  // Handler for category change via buttons
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");
    const params = new URLSearchParams();

    if (category !== "All") {
      const displayCategory = Object.keys(categoryMapping).find(
        (key) => categoryMapping[key] === category,
      );
      if (displayCategory) {
        params.set("category", displayCategory);
      }
    }

    router.push(`/gallery?${params.toString()}`);

    scrollToProductsGrid();
  };

  // Handler for subcategory change
  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    const params = new URLSearchParams(searchParams.toString());
    if (subcategory) {
      params.set("subcategory", subcategory);
    } else {
      params.delete("subcategory");
    }
    router.push(`/gallery?${params.toString()}`);

    scrollToProductsGrid();
  };

  // Effect to handle subcategory from URL (optional)
  useEffect(() => {
    const subcategoryFromParams = searchParams.subcategory;
    if (
      categoryFromParams &&
      categoryMapping[categoryFromParams] === selectedCategory &&
      subcategoryFromParams &&
      cakeSubcategories[selectedCategory]?.includes(subcategoryFromParams)
    ) {
      setSelectedSubcategory(subcategoryFromParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, categoryFromParams, selectedCategory]);

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;
      const subcategoryMatch =
        !selectedSubcategory || product.subcategory === selectedSubcategory;
      const searchMatch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return categoryMatch && subcategoryMatch && searchMatch;
    });
  }, [selectedCategory, selectedSubcategory, searchQuery]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h1 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
            Galeria jonë
          </h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Eksploroni galerinë tonë të produkteve të shijshme dhe të krijesave
            të mësojshme
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="sticky top-20 z-40 border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Search Bar */}
            <div className="flex w-full items-center gap-4 md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
            </div>

            {/* Category Buttons */}
            <div className="flex w-full gap-2 overflow-x-auto pb-2 md:w-auto lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-1 transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-rose-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Subcategories for Cakes */}
          {hasSubcategories && (
            <div className="mt-4 flex gap-2 overflow-x-auto">
              {cakeSubcategories[selectedCategory]?.map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => handleSubcategoryChange(subcategory)}
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-sm transition-all duration-300 ${
                    selectedSubcategory === subcategory
                      ? "bg-rose-200 text-rose-800 shadow-md"
                      : "bg-rose-50 text-rose-600 hover:bg-rose-100"
                  }`}>
                  {subcategory}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12" ref={productsGridRef}>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={false}
                  />
                </div>
                <div className="p-3">
                  <h3 className="mb-1 text-sm font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-gray-600">
                    {product.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
