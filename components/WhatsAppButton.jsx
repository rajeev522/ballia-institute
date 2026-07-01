"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919369695793"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      transition={{ delay: 1 }}
      className="fixed bottom-5 right-5 z-50 h-14 w-14 flex items-center justify-center rounded-full bg-success text-white shadow-xl shadow-success/30"
    >
      <MessageCircle size={26} fill="white" />
    </motion.a>
  );
}
