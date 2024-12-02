import Image from "next/image";
import { Product } from "@/data/types";

interface GalleryGridProps {
  products: Product[];
}

export default function GalleryGrid({ products }: GalleryGridProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.length > 0 ? (
          products.map((product) => (
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
            Nuk u gjet asnje produkt.
          </p>
        )}
      </div>
    </div>
  );
}