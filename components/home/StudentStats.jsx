"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { STATS } from "@/lib/data";

export default function StudentStats() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-600" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center text-white">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-4xl sm:text-5xl font-bold">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/80">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
