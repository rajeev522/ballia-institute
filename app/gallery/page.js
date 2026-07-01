"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { GALLERY_IMAGES } from "@/lib/data";

const CATEGORIES = ["All", "Workshops", "Seminars", "Classroom", "Achievements"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const images = GALLERY_IMAGES.filter((img) => filter === "All" || img.category === filter);

  const close = () => setActiveIndex(null);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);
  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        eyebrow="Gallery"
        title="Moments From Our Workshops & Seminars"
        subtitle="A glimpse into our classrooms, live events, and student achievements."
      />

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === c ? "bg-primary text-white" : "border border-border-color hover:bg-surface-2"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-2 sm:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            layoutId={`gallery-${img.id}`}
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            className="w-full break-inside-avoid rounded-2xl overflow-hidden card-hover cursor-pointer bg-surface border border-border-color p-1"
          >
            <img src={img.src} alt={img.alt} className="w-full h-auto rounded-xl object-cover" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-6"
          >
            <motion.div
              layoutId={`gallery-${images[activeIndex].id}`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black flex items-center justify-center"
            >
              <img src={images[activeIndex].src} alt={images[activeIndex].alt} className="max-w-full max-h-[85vh] object-contain" />
              <span className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs">
                {images[activeIndex].category}
              </span>
              <button
                onClick={close}
                className="absolute -top-4 -right-4 h-10 w-10 flex items-center justify-center rounded-full bg-white text-black"
              >
                <X size={18} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60"
              >
                <ChevronRight size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
