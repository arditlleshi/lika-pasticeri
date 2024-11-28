"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface StoreCardProps {
  name: string;
  description: string;
  image: string;
  mapUrl: string;
}

export default function StoreCard({
  name,
  description,
  image,
  mapUrl,
}: StoreCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
    >
      <div className="relative aspect-[4/3] group overflow-hidden">
        <Image
          src={image}
          alt={name}  
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Map Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="absolute top-4 right-4"
        >
          <Link
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/badge flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg hover:bg-rose-500 transition-all duration-300"
          >
            <MapPin className="h-4 w-4 text-rose-500 group-hover/badge:text-white transition-colors" />
            <span className="text-sm font-medium text-rose-500 group-hover/badge:text-white transition-colors">
              Shiko në Hartë
            </span>
          </Link>
        </motion.div>

        {/* Floating Info Card */}
        <div className="absolute left-4 right-4 bottom-4 bg-white/90 backdrop-blur-md rounded-xl p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}