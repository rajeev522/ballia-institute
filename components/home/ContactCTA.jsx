"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-indigo-600 to-success p-10 sm:p-16 text-center text-white"
      >
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Start Your Trading Journey?</h2>
          <p className="mt-4 max-w-xl mx-auto text-white/85">
            Book a free 1-on-1 counselling call and let us help you pick the right course for your goals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-primary hover:bg-white/90 transition-colors"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+919369695793"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/50 px-7 py-3.5 font-semibold hover:bg-white/10 transition-colors"
            >
              <PhoneCall size={18} /> +91 93696 95793
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
