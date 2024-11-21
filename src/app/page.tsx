"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  baklavaImages,
  categoryShowcase,
  features,
  heroImages,
} from "../data/home-data";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentBaklavaIndex, setCurrentBaklavaIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    const baklavaInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBaklavaIndex((prevIndex) =>
          prevIndex === baklavaImages.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }, 5000);

    return () => {
      clearInterval(heroInterval);
      clearInterval(baklavaInterval);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <Image
              key={image.alt}
              src={image.url}
              alt={image.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
          <div className="max-w-2xl text-white">
            <h1 className="mb-6 font-serif text-5xl font-bold md:text-6xl">
              Pasticeri Artisan në Zemër të Tiranës
            </h1>
            <p className="mb-8 text-xl">
              Krijimi i momenteve të gëzimit me produktet tona të freskëta të
              pjekura që nga viti 1995
            </p>
            <Link
              href="/gallery"
              className="flex w-fit items-center rounded-full bg-gradient-to-r from-rose-600 to-rose-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-rose-700 hover:to-rose-600 hover:shadow-xl"
            >
              Eksploroni Produktet Tona
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Baklava Showcase Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="space-y-10 lg:w-1/2">
              <div className="inline-block">
                <span className="rounded-full bg-rose-600 bg-opacity-10 px-4 py-2 text-sm font-medium text-rose-500">
                  Ofertë Speciale e Dërgimit
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                Eksperienca e Baklavat Tonë të Njohur
              </h2>
              <p className="text-lg text-gray-300">
                Shijoni baklavat tonë të njohur, të punuara me dorë çdo ditë
                duke përdorur arra premium, filoz të butë dhe mjaltë të pastër.
                Tani në dispozicion për dërgim në shtëpi në të gjithë Tiranën.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <feature.icon className="mb-2 h-6 w-6 text-rose-500" />
                    <h3 className="mb-1 text-sm font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Updated Image Div */}
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
                            isTransitioning
                              ? "rotate-12 scale-110"
                              : "rotate-0"
                          }`
                        : "-rotate-12 scale-90 opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Showcase Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              Eksploroni Kategoritë Tona
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Zbuloni artin dhe traditën pas gamës sonë të ndryshme të
              produkteve
            </p>
          </div>

          <div className="grid grid-cols-1 gap-24">
            {categoryShowcase.map((category, index) => (
              <div
                key={category.name}
                className={`flex flex-col items-center gap-12 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative lg:w-1/2">
                  <div className="absolute inset-0 -rotate-3 transform rounded-3xl bg-gradient-to-r from-rose-600/20 to-rose-500/20" />
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="relative aspect-[4/3] w-full transform rounded-3xl object-cover shadow-xl transition-transform duration-500 hover:rotate-3"
                  />
                </div>
                <div className="space-y-6 lg:w-1/2">
                  <h3 className="font-serif text-3xl font-bold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {category.products.map((product) => (
                      <div
                        key={product}
                        className="flex items-center rounded-xl bg-rose-50 p-4"
                      >
                        <div className="mr-3 h-2 w-2 rounded-full bg-rose-500" />
                        <span className="text-gray-800">{product}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/gallery?category=${encodeURIComponent(category.name)}`}
                    className="inline-flex items-center text-rose-600 transition-colors hover:text-rose-700"
                  >
                    Shikoni të Gjitha Produktet{" "}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
