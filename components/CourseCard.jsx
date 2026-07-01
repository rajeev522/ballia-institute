"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Clock, BarChart3, Star, ArrowRight } from "lucide-react";

const LEVEL_COLOR = {
  Beginner: "text-success bg-success/10",
  Intermediate: "text-warning bg-warning/10",
  Advanced: "text-danger bg-danger/10",
  "All Levels": "text-primary bg-primary/10",
};

export default function CourseCard({ course, index = 0 }) {
  const Icon = Icons[course.icon] || Icons.BookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={`group flex flex-col rounded-2xl border border-border-color bg-surface p-6 ${
        course.comingSoon ? "opacity-75 grayscale-[20%] hover:opacity-100 transition-all duration-300" : "card-hover"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-success/15 text-primary">
          {course.comingSoon ? <Icons.Lock size={22} className="text-foreground/50" /> : <Icon size={22} />}
        </span>
        <div className="flex flex-col items-end gap-1">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${LEVEL_COLOR[course.level]}`}>
            {course.level}
          </span>
          {course.comingSoon && (
            <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground/50 border border-border-color">
              Coming Soon
            </span>
          )}
        </div>
      </div>

      <h3 className="mt-4 text-lg font-bold">{course.title}</h3>
      <p className="mt-2 text-sm text-foreground/60 leading-relaxed flex-1">{course.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {course.topics.slice(0, 3).map((t) => (
          <span key={t} className="rounded-md bg-surface-2 px-2 py-1 text-[11px] text-foreground/60">
            {t}
          </span>
        ))}
        {course.topics.length > 3 && (
          <span className="rounded-md bg-surface-2 px-2 py-1 text-[11px] text-foreground/60">
            +{course.topics.length - 3} more
          </span>
        )}
      </div>

      <div className="mt-5 flex items-center gap-4 text-xs text-foreground/50">
        <span className="flex items-center gap-1">
          <Clock size={13} /> {course.duration}
        </span>
        <span className="flex items-center gap-1">
          <Star size={13} className="text-warning" fill="currentColor" /> {course.rating}
        </span>
        <span className="flex items-center gap-1">
          <BarChart3 size={13} /> {course.students.toLocaleString()}+
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between border-t border-border-color pt-4 gap-2">
        <div className="flex flex-col">
          {course.comingSoon ? (
            <span className="text-xl font-bold text-foreground/50">Coming Soon</span>
          ) : (
            <>
              {course.originalPrice && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground/50 line-through decoration-danger decoration-2">{course.originalPrice}</span>
                  <span className="animate-pulse rounded border border-success/30 bg-success/10 px-1.5 py-0.5 text-[10px] font-bold uppercase text-success">Offer Live</span>
                </div>
              )}
              <span className={`text-xl font-bold ${course.originalPrice ? "text-success" : ""}`}>{course.price}</span>
            </>
          )}
        </div>
        {course.comingSoon ? (
          <button
            disabled
            className="inline-flex items-center gap-1.5 rounded-lg bg-surface-2 px-4 py-2 text-sm font-semibold text-foreground/40 cursor-not-allowed"
          >
            Stay Tuned
          </button>
        ) : (
          <a
            href="https://forms.gle/Sv8Z26d7e1FPLXPd8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-primary/40 transition-all"
          >
            Enroll <ArrowRight size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
