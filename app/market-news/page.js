"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import TradingViewWidget from "@/components/TradingViewWidget";
import { useTheme } from "@/context/ThemeContext";

export default function MarketNewsPage() {
  const { theme } = useTheme();
  const colorTheme = theme === "dark" ? "dark" : "light";

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          <Newspaper size={12} /> Market News
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Stay Ahead With Live Market News</h1>
        <p className="mt-4 text-foreground/60">
          Real-time curated headlines on Indian markets, economy, and stocks — updated 24/7.
        </p>
      </motion.div>

      <div className="w-full">
        <TradingViewWidget
          scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"
          height={800}
          config={{
            feedMode: "all_symbols",
            isTransparent: true,
            displayMode: "regular",
            width: "100%",
            height: 800,
            colorTheme: colorTheme,
            locale: "in"
          }}
        />
      </div>
    </div>
  );
}
