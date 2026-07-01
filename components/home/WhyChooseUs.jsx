"use client";

import { motion } from "framer-motion";
import { GraduationCap, LineChart, ShieldCheck, Users, Video, Wallet } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const FEATURES = [
  { icon: GraduationCap, title: "Structured Curriculum", text: "From basics to advanced strategies, designed in a logical progression." },
  { icon: Video, title: "Live Market Sessions", text: "Watch real trades executed live and learn decision-making in real time." },
  { icon: ShieldCheck, title: "Risk-First Approach", text: "We teach capital protection before chasing profits — always." },
  { icon: Users, title: "Community Support", text: "Join a private community of like-minded traders and investors." },
  { icon: LineChart, title: "Practical Tools", text: "Access calculators, watchlists, and live charts built into your dashboard." },
  { icon: Wallet, title: "Affordable Pricing", text: "Premium education priced fairly, with flexible payment options." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface-2/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for Real Results, Not Just Theory"
          subtitle="We combine practical mentorship, real trading experience, and a supportive community to help you become a confident, independent trader."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border-color bg-surface p-6 card-hover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon size={20} />
              </span>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
