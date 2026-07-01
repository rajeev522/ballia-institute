"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Users, Star } from "lucide-react";
import StockBackground from "@/components/StockBackground";
import TypingText from "@/components/TypingText";

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient pt-16 pb-24 sm:pt-24 sm:pb-32">
      <StockBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary"
          >
            <ShieldCheck size={14} /> Trusted by 25,000+ traders across India
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            Master the Markets with <span className="gradient-text">Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg text-foreground/70 h-8"
          >
            Learn <TypingText words={["Technical Analysis", "Options Trading", "Risk Management", "Trading Psychology"]} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-base text-foreground/60 max-w-xl mx-auto"
          >
            Premium, practical stock market coaching built by full-time traders — from basics to advanced
            strategies, live market sessions, and disciplined risk management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/courses"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-white shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all"
            >
              Explore Courses
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/live-market"
              className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 font-semibold hover:border-primary transition-all"
            >
              <PlayCircle size={18} /> View Live Market
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/60"
          >
            <div className="flex items-center gap-2">
              <Users size={16} className="text-primary" /> 25,000+ Students
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-warning" fill="currentColor" /> 4.8/5 Average Rating
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-success" /> 12+ Years Experience
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
