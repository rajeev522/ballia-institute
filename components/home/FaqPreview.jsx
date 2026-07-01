import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQS } from "@/lib/data";

export default function FaqPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Got Questions? We've Got Answers"
        subtitle="Everything you need to know before starting your learning journey with us."
      />
      <FaqAccordion faqs={FAQS.slice(0, 4)} />
      <div className="mt-8 text-center">
        <Link
          href="/faq"
          className="inline-flex items-center gap-2 font-semibold text-primary hover:underline underline-offset-4"
        >
          View All FAQs <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
