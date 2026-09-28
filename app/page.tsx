import type { Metadata } from "next";
import { HeroBanner } from "@/components/home/hero-banner";

export const metadata: Metadata = {
  title: "Home",
  description: "Discover top courses from best creators.",
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroBanner />
      {/* TODO: compose from @/components/home/* — Categories, FeaturedCourses, TopCreators */}
    </main>
  );
}
