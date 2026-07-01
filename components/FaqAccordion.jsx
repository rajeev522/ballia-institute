"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function FaqAccordion({ faqs, allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggle = (i) => {
    setOpenIndexes((prev) => {
      const isOpen = prev.includes(i);
      if (allowMultiple) {
        return isOpen ? prev.filter((x) => x !== i) : [...prev, i];
      }
      return isOpen ? [] : [i];
    });
  };

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((item, i) => {
        const isOpen = openIndexes.includes(i);
        return (
          <div
            key={item.q}
            className="rounded-xl border border-border-color bg-surface overflow-hidden"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium"
            >
              {item.q}
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
              >
                <Plus size={15} />
              </motion.span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-sm text-foreground/60 leading-relaxed">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
