import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Search courses and creators.",
};

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Search {q ? `— “${q}”` : ""}
      </h1>
      {/* TODO: SearchBar + results from @/components/search/* */}
    </main>
  );
}
