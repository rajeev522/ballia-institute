"use client";

import { motion } from "framer-motion";
import { Star, ImageIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Our Students Say"
        subtitle="Real feedback and results from traders and investors who trained with us."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="flex flex-col rounded-2xl border border-border-color bg-surface p-6 card-hover"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-success text-sm font-bold text-white">
                {t.photo}
              </span>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-foreground/50">{t.role}</p>
              </div>
            </div>

            <div className="mt-3 flex gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={14}
                  className={idx < Math.round(t.rating) ? "text-warning" : "text-foreground/20"}
                  fill="currentColor"
                />
              ))}
            </div>

            <p className="mt-3 text-sm text-foreground/60 leading-relaxed flex-1">{t.review}</p>

            <div className="mt-4 rounded-xl border border-dashed border-border-color bg-surface-2 flex items-center gap-2 p-3 text-xs text-foreground/50">
              <ImageIcon size={16} /> Profit Screenshot Placeholder
            </div>

            <p className="mt-3 inline-block w-fit rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
              {t.profit}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
