"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import { COURSES } from "@/lib/data";

const LEVELS = ["All", "Beginner", "Intermediate", "Advanced", "All Levels"];

export default function CoursesPage() {
  const [level, setLevel] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return COURSES.filter((c) => {
      const matchesLevel = level === "All" || c.level === level;
      const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase());
      return matchesLevel && matchesQuery;
    });
  }, [level, query]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          All Courses
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Courses Designed for Every Trading Style
        </h1>
        <p className="mt-4 text-foreground/60">
          9 comprehensive courses covering everything from stock market basics to advanced options
          strategies and trading psychology.
        </p>
      </motion.div>

      <div className="mb-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search courses..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:max-w-xs rounded-xl border border-border-color bg-surface px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
        />
        <div className="flex flex-wrap gap-2">
          {LEVELS.map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                level === l
                  ? "bg-primary text-white"
                  : "border border-border-color hover:bg-surface-2"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-foreground/50 py-20">No courses match your search.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course, i) => (
            <div key={course.slug} id={course.slug}>
              <CourseCard course={course} index={i} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
