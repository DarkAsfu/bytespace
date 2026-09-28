import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Details",
};

type Props = {
  params: Promise<{ courseId: string }>;
};

export default async function CourseDetailsPage({ params }: Props) {
  const { courseId } = await params;
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Course Details</h1>
      <p className="text-sm text-muted-foreground">Course: {courseId}</p>
      {/* TODO: overview, curriculum preview, instructor card from @/components/course/* */}
    </main>
  );
}
