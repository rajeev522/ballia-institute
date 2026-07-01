"use client";

import { motion } from "framer-motion";
import { Target, Eye, GraduationCap, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { TIMELINE } from "@/lib/data";

const METHOD = [
  "Learn the concept with simple, jargon-free explanations",
  "See it applied on real, live market charts",
  "Practice with guided paper-trading exercises",
  "Get feedback from mentors on your trade journal",
  "Graduate to independent, disciplined trading",
];

export default function AboutPage() {
  return (
    <>
      {/* Founder Story */}
      <section className="hero-gradient py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Our Story
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            From One Trader&apos;s Journal to a{" "}
            <span className="gradient-text">Nationwide Coaching Platform</span>
          </h1>
          <p className="mt-6 text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            Ritik Kushwah began his stock market journey in 2026 with a single demat account and a passion for financial growth. His focus on disciplined learning and real-market experience has shaped his practical approach to trading and investing. As the founder and mentor at Ballia Institute of Stock Market (BISM), he helps students understand the market through simple, actionable lessons—without unnecessary complexity or unrealistic promises.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Eye,
              title: "Our Vision",
              text: "To become India's most trusted stock market education platform, empowering a generation of financially independent, disciplined investors and traders.",
            },
            {
              icon: Target,
              title: "Our Mission",
              text: "To simplify the stock market through practical, mentor-led education — replacing guesswork with process, and emotion with discipline.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border-color bg-surface p-8 card-hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon size={22} />
              </span>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-foreground/60 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Teaching Method */}
      <section className="bg-surface-2/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="A Teaching Method Built on Practice, Not Just Theory"
            subtitle="We believe you learn to trade by trading — with guidance, structure, and real feedback at every step."
          />
          <div className="mx-auto max-w-2xl space-y-4">
            {METHOD.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-xl border border-border-color bg-surface p-4"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1 text-sm text-foreground/70">{step}</p>
                <CheckCircle2 className="ml-auto flex-shrink-0 text-success" size={18} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading eyebrow="Our Journey" title="Milestones Along the Way" />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border-color sm:left-1/2" />
          <div className="space-y-10">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col sm:flex-row items-start gap-4 pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse sm:text-right"
                  }`}
              >
                <div className="absolute left-2.5 top-1 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/20 sm:left-1/2 sm:-translate-x-1/2" />
                <div className="sm:w-1/2 sm:px-8">
                  <div className="rounded-xl border border-border-color bg-surface p-5 card-hover">
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                    <h4 className="mt-1 font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm text-foreground/60">{item.text}</p>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-border-color bg-surface p-8 flex items-center gap-4">
          <GraduationCap className="text-primary flex-shrink-0" size={36} />
          <p className="text-sm text-foreground/60 leading-relaxed">
            Our mentors are NISM-certified research analysts and full-time market practitioners —
            not just instructors reading off slides. Every strategy we teach has been tested with real
            capital, in real market conditions.
          </p>
        </div>
      </section>
    </>
  );
}
