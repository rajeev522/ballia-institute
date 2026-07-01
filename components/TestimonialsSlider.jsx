"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSlider({ autoPlay = true }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, [autoPlay]);

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const t = TESTIMONIALS[index];

  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="relative min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl p-8 text-center shadow-xl"
          >
            <Quote className="mx-auto text-primary/40" size={32} />
            <p className="mt-4 text-lg leading-relaxed">{t.review}</p>
            <div className="mt-5 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.round(t.rating) ? "text-warning" : "text-foreground/20"}
                  fill="currentColor"
                />
              ))}
            </div>
            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-success text-sm font-bold text-white">
                {t.photo}
              </span>
              <div className="text-left">
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-foreground/50">{t.role}</p>
              </div>
            </div>
            <p className="mt-3 inline-block rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
              {t.profit}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="h-10 w-10 flex items-center justify-center rounded-full border border-border-color hover:bg-surface-2"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-2 bg-border-color"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="h-10 w-10 flex items-center justify-center rounded-full border border-border-color hover:bg-surface-2"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
