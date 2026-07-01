"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.span
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-success text-white"
          >
            <TrendingUp size={30} />
          </motion.span>
          <div className="mt-5 flex items-center justify-center gap-2 font-bold text-2xl text-foreground">
            <img src="/logo.png" alt="BISM Logo" className="h-16 w-auto object-contain" />
          </div>
          <div className="mt-4 h-1 w-40 overflow-hidden rounded-full bg-surface-2">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-success"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
