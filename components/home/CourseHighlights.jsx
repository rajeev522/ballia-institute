"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import { COURSES } from "@/lib/data";

export default function CourseHighlights() {
  const featured = COURSES.slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading
        eyebrow="Course Highlights"
        title="Courses for Every Stage of Your Trading Journey"
        subtitle="Hand-crafted courses covering everything from your first trade to advanced options strategies."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((course, i) => (
          <CourseCard key={course.slug} course={course} index={i} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-7 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
        >
          View All Courses <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
