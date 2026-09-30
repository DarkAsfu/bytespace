import type { Metadata } from "next";
import { HeroBanner } from "@/components/home/hero-banner";
import { LogoStrip } from "@/components/home/logo-strip";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { LearningCategories } from "@/components/home/learning-categories";
import { WhyBytespace } from "@/components/home/why-bytespace";
import { CreatorCta } from "@/components/home/creator-cta";
import { Testimonials } from "@/components/home/testimonials";
import { SiteFooter } from "@/components/home/site-footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Discover top courses from best creators.",
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroBanner />
      <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-[120px] lg:py-24">
        <LogoStrip />
      </section>
      <FeaturedCourses />
      <LearningCategories />
      <WhyBytespace />
      <CreatorCta />
      <Testimonials />
      <SiteFooter />
    </main>
  );
}
