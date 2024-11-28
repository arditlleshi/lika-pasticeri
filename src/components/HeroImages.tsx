"use client";

import { useState, useEffect, memo } from "react";
import Image from "next/image";
import { heroImages } from "../data/home-data";

function HeroImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(heroInterval);
  }, []);

  return (
    <>
      {heroImages.map((image, index) => (
        <Image
          key={image.alt}
          src={image.url}
          alt={image.alt}
          fill
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />
    </>
  );
}

export default memo(HeroImages);
