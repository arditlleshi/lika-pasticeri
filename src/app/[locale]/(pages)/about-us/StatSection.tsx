"use client";

import StatCard from "@/components/StatCard";
import { stats } from "@/data/about-data";
import { motion } from "motion/react";

export default function StatSection() {
  return (
    <section className="relative py-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-rose-100 via-rose-50 to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Growth in Numbers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over two decades of dedication to quality and service have helped us achieve remarkable milestones.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>
  )
}
