"use client";

import { motion } from "framer-motion";
import { Cake } from "lucide-react";

export default function LoadingUI() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white min-h-screen"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated rolling pin */}
        <motion.div
          animate={{
            rotate: [0, 360],
            y: [-10, 10, -10],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="mb-8"
        >
          <div className="absolute -top-6 left-1/2 h-16 w-1 -translate-x-1/2 transform rounded-full bg-rose-200" />
          <div className="h-2 w-32 rounded-full bg-gradient-to-r from-rose-400 to-rose-600" />
          <div className="absolute -bottom-6 left-1/2 h-16 w-1 -translate-x-1/2 transform rounded-full bg-rose-200" />
        </motion.div>

        {/* Animated cake icon */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-4"
        >
          <div className="rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 p-3 shadow-lg">
            <Cake className="h-8 w-8 text-white" />
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-center"
        >
          <h3 className="mb-2 font-serif text-xl font-bold text-gray-900">
            Pastiçeri Lika
          </h3>
          <p className="text-sm text-rose-600">Duke përgatitur ëmbëlsirat...</p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -z-10">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="h-48 w-48 rounded-full border-4 border-dashed border-rose-200"
          />
        </div>
      </div>
    </motion.div>
  );
}