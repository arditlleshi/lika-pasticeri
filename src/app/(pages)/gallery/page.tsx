import { Suspense } from "react";
import { categories, products } from "@/data/gallery-data";
import { Product } from "@/data/types";
import GalleryGrid from "./GalleryGrid";
import GalleryFilters from "./GalleryFilters";

interface GalleryPageProps {
  searchParams: Promise<{
    category?: string;
    subcategory?: string;
    search?: string;
  }>;
}

export default async function GalleryPage({
  searchParams,
}: GalleryPageProps) {
  // Await searchParams
  const params = await searchParams;
  
  // Get params after resolution
  const categoryFromParams = params.category;
  const subcategoryFromParams = params.subcategory;
  const searchQuery = params.search || "";

  // Get selected category
  const selectedCategory = categoryFromParams && categories.includes(categoryFromParams)
    ? categoryFromParams
    : "Të Gjitha";

  // Get subcategories for selected category
  const getSubcategories = (category: string): string[] => {
    const subcategoriesSet = new Set<string>();
    products.forEach((product) => {
      if (product.category === category && product.subcategory!.trim() !== "") {
        subcategoriesSet.add(product.subcategory!);
      }
    });
    return Array.from(subcategoriesSet);
  };

  const currentSubcategories = getSubcategories(selectedCategory);

  // Get selected subcategory
  const selectedSubcategory = subcategoryFromParams && 
    currentSubcategories.includes(subcategoryFromParams)
    ? subcategoryFromParams
    : "";

  // Filter products
  const filteredProducts = products.filter((product: Product) => {
    const categoryMatch =
      selectedCategory === "Të Gjitha" || product.category === selectedCategory;
    const subcategoryMatch =
      !selectedSubcategory || product.subcategory === selectedSubcategory;
    const searchMatch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return categoryMatch && subcategoryMatch && searchMatch;
  });

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
            të mrekullueshme.
          </p>
        </div>
      </div>

      {/* Filters */}
      <Suspense fallback={<div className="py-4 text-center">Loading filters...</div>}>
        <GalleryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          subcategories={currentSubcategories}
          selectedSubcategory={selectedSubcategory}
          searchQuery={searchQuery}
        />
      </Suspense>

      {/* Products Grid */}
      <Suspense fallback={<div className="py-20 text-center">Loading products...</div>}>
        <GalleryGrid products={filteredProducts} />
      </Suspense>
    </div>
  );
}