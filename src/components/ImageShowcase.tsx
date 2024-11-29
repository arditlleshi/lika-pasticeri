"use client";

import Image, { StaticImageData } from "next/image";
import { memo, useEffect, useState } from "react";

function ImageShowcase({ images }: { images: { url: StaticImageData; alt: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative aspect-[4/3] w-98 lg:w-1/2">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 rotate-6 transform rounded-3xl bg-gradient-to-r from-rose-600/20 to-rose-500/20" />
      <div className="absolute inset-0 -rotate-6 transform rounded-3xl bg-gradient-to-r from-rose-600/20 to-rose-500/20" />

      {/* Image Container */}
      <div className="relative h-full overflow-hidden rounded-3xl shadow-2xl">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            alt={image.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
              index === currentIndex
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

export default memo(ImageShowcase);
