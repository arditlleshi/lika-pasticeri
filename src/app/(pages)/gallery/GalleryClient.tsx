"use client";

import { Search } from "lucide-react";
import { useRef, useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { categories, products } from "@/data/gallery-data";
import { Product } from "@/data/types";
import FilterButton from "./FilterButton";
import SubcategoryButton from "./SubcategoryButton";

const GalleryClient: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryFromParams = searchParams.get("category");
  const subcategoryFromParams = searchParams.get("subcategory");

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const productsGridRef = useRef<HTMLDivElement>(null);

  /**
   * Scroll to Products Grid
   */
  const scrollToProductsGrid = () => {
    if (productsGridRef.current) {
      window.scrollTo({ top: 200, behavior: "smooth" });
    }
  };
  

  /**
   * Function to retrieve unique subcategories based on selected category
   */
  const getSubcategories = (category: string): string[] => {
    const subcategoriesSet = new Set<string>();
    products.forEach((product) => {
      if (product.category === category && product.subcategory!.trim() !== "") {
        subcategoriesSet.add(product.subcategory!);
      }
    });
    return Array.from(subcategoriesSet);
  };

  /**
   * Effect to handle category changes from URL
   */
  useEffect(() => {
    if (categoryFromParams) {
      const decodedCategory = decodeURIComponent(categoryFromParams);
      if (categories.includes(decodedCategory)) {
        setSelectedCategory(decodedCategory);
        setSelectedSubcategory("");
      } else {
        setSelectedCategory("All");
        setSelectedSubcategory("");
      }
    } else {
      setSelectedCategory("All");
      setSelectedSubcategory("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFromParams]);

  /**
   * Effect to handle subcategory changes from URL
   */
  useEffect(() => {
    if (
      categoryFromParams &&
      decodeURIComponent(categoryFromParams) === selectedCategory &&
      subcategoryFromParams
    ) {
      const decodedSubcategory = decodeURIComponent(subcategoryFromParams);
      if (getSubcategories(selectedCategory).includes(decodedSubcategory)) {
        setSelectedSubcategory(decodedSubcategory);
        return;
      }
    }
    setSelectedSubcategory("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subcategoryFromParams, categoryFromParams, selectedCategory]);

  /**
   * Handler for category change via buttons
   */
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");

    const params = new URLSearchParams();

    if (category !== "All") {
      params.set("category", encodeURIComponent(category));
    }

    // Preserve search query if applicable
    if (searchQuery.trim()) {
      params.set("search", encodeURIComponent(searchQuery.trim()));
    }

    router.push(`/gallery?${params.toString()}`, { scroll: false });
    scrollToProductsGrid();
  };

  /**
   * Handler for subcategory change
   */
  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);

    const params = new URLSearchParams(searchParams.toString());

    if (subcategory) {
      params.set("subcategory", encodeURIComponent(subcategory));
    } else {
      params.delete("subcategory");
    }

    // Preserve category
    if (selectedCategory !== "All") {
      params.set("category", encodeURIComponent(selectedCategory));
    }

    // Preserve search query if applicable
    if (searchQuery.trim()) {
      params.set("search", encodeURIComponent(searchQuery.trim()));
    }

    router.push(`/gallery?${params.toString()}`, { scroll: false });
    scrollToProductsGrid();
  };

  /**
   * Handler for search input change
   */
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Optionally, implement debouncing here
  };

  /**
   * Filter products based on selected filters
   */
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

  /**
   * Retrieve subcategories for the current selected category
   */
  const currentSubcategories = useMemo(
    () => getSubcategories(selectedCategory),
    [selectedCategory]
  );

  return (
    <div>
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
                  onChange={handleSearchChange}
                  className="w-full rounded-full border py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  aria-label="Search gallery"
                />
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
          {currentSubcategories.length > 0 && (
            <div className="mt-4 flex gap-2 overflow-x-auto">
              {currentSubcategories.map((subcategory) => (
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

      {/* Products Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12" ref={productsGridRef}>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
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
};

export default GalleryClient;