"use client";

import { motion } from "framer-motion";
import { Award, BookOpenCheck, Users2 } from "lucide-react";
import Link from "next/link";

export default function FounderIntro() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm group cursor-pointer"
        >
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary via-indigo-500 to-success p-1 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/30">
            <div className="h-full w-full rounded-[22px] bg-surface flex items-center justify-center overflow-hidden">
              <img src="/founder.jpg" alt="Ritik Kushwah" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-xl">
            <p className="text-2xl font-bold gradient-text">Founder</p>
            <p className="text-xs text-foreground/60">BISM</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Meet Your Mentor
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            Learn From a Full-Time Trader, Not a Textbook
          </h2>
          <p className="mt-5 text-foreground/60 leading-relaxed">
            Ritik Kushwah began his stock market journey with a passion for financial growth. His focus on disciplined learning and real-market experience has shaped his practical approach to trading and investing at Ballia Institute of Stock Market (BISM).
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: Award, label: "NISM Certified", sub: "Research Analyst" },
              { icon: Users2, label: "25,000+", sub: "Students Mentored" },
              { icon: BookOpenCheck, label: "9 Courses", sub: "Beginner to Pro" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-border-color p-4 text-center card-hover">
                <item.icon className="mx-auto text-primary" size={22} />
                <p className="mt-2 text-sm font-semibold">{item.label}</p>
                <p className="text-xs text-foreground/50">{item.sub}</p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-8 inline-block font-semibold text-primary hover:underline underline-offset-4"
          >
            Read the full story →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
