import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQS } from "@/lib/data";

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our courses, teaching style, and policies."
      />
      <FaqAccordion faqs={FAQS} allowMultiple />
    </div>
  );
}
