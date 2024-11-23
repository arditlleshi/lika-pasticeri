import { Suspense } from "react";
import GalleryClient from "./GalleryClient";

export default function GalleryPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      {/* Server-rendered content */}
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

      {/* Client Component */}
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <GalleryClient />
      </Suspense>
    </div>
  );
}
