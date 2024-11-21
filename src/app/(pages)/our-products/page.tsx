"use client";

import { Search } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

const categories = [
  "Të Gjitha",
  "Pastritë",
  "Tortat",
  "Tradicionale",
];

const products = [
  {
    id: 2,
    name: "Éclair me Çokollatë",
    price: "280 LEK",
    category: "Pastritë",
    description: "Pastriti klasik francez i mbushur me krem çokollate",
    image:
      "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
  },
  {
    id: 3,
    name: "Torta e Dasmës",
    price: "25000 LEK",
    category: "Tortat",
    description: "Torta dasme të dizajnuara sipas preferencave tuaja",
    image:
      "https://images.unsplash.com/photo-1678473289821-1818e3f82e9a?w=500&auto=format&fit=crop&q=120",
  },
  {
    id: 4,
    name: "Baklava Tradicionale",
    price: "180 LEK",
    category: "Tradicionale",
    description: "Baklava e bërë me dorë me arra dhe sirup mjaltë",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80",
    bestseller: true,
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Të Gjitha");
  const [searchQuery, setSearchQuery] = useState("");
  const productsGridRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (productsGridRef.current) {
      window.scrollTo({
        top: 220,
        behavior: "smooth",
      });
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "Të Gjitha" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Produktet Tona
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Zbuloni gamën tonë të gjerë të produkteve të pjekura të freskëta, nga pastërtitë tradicionale shqiptare deri te preferencat ndërkombëtare.
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Kërkoni produktet..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              {/* Removed Sorting Dropdown */}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-1 rounded-full whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-rose-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div ref={productsGridRef} className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.bestseller && (
                  <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popullor
                  </div>
                )}
              </div>
              <div className="p-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-rose-600 mb-2">{product.category}</p>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
                <div className="mt-2">
                  <span className="text-lg font-medium text-rose-600">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
