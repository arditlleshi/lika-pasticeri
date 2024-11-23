"use client";

import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { baklavaImages } from "../data/home-data";

function BaklavaShowcase() {
  const [currentBaklavaIndex, setCurrentBaklavaIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const baklavaInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBaklavaIndex((prevIndex) =>
          prevIndex === baklavaImages.length - 1 ? 0 : prevIndex + 1,
        );
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }, 5000);

    return () => clearInterval(baklavaInterval);
  }, []);

  return (
    <div className="relative aspect-[4/3] w-full lg:w-1/2">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 rotate-6 transform rounded-3xl bg-gradient-to-r from-rose-600/20 to-rose-500/20" />
      <div className="absolute inset-0 -rotate-6 transform rounded-3xl bg-gradient-to-r from-rose-600/20 to-rose-500/20" />

      {/* Image Container */}
      <div className="relative h-full overflow-hidden rounded-3xl shadow-2xl">
        {baklavaImages.map((image, index) => (
          <Image
            key={image.alt}
            src={image.url}
            alt={image.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
              index === currentBaklavaIndex
                ? `scale-100 opacity-100 ${
                    isTransitioning ? "rotate-12 scale-110" : "rotate-0"
                  }`
                : "-rotate-12 scale-90 opacity-0"
            }`}
            fill
          />
        ))}
      </div>
    </div>
  );
}

export default memo(BaklavaShowcase);
