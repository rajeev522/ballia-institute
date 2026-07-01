import Hero from "@/components/home/Hero";
import FounderIntro from "@/components/home/FounderIntro";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CourseHighlights from "@/components/home/CourseHighlights";
import StudentStats from "@/components/home/StudentStats";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import FaqPreview from "@/components/home/FaqPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FounderIntro />
      <WhyChooseUs />
      <CourseHighlights />
      <StudentStats />
      <TestimonialsPreview />
      <FaqPreview />
      <ContactCTA />
    </>
  );
}
