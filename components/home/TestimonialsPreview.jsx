import SectionHeading from "@/components/SectionHeading";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function TestimonialsPreview() {
  return (
    <section className="bg-surface-2/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Thousands of Traders"
          subtitle="Real stories from students who transformed their trading with our coaching."
        />
        <TestimonialsSlider />
      </div>
    </section>
  );
}
