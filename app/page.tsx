import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Discover top courses from best creators.",
};

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Home</h1>
      {/* TODO: compose from @/components/home/* — Hero, Categories, FeaturedCourses, TopCreators */}
    </main>
  );
}
