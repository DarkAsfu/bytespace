import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator Profile",
};

type Props = {
  params: Promise<{ creatorId: string }>;
};

export default async function CreatorProfilePage({ params }: Props) {
  const { creatorId } = await params;
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Creator Profile</h1>
      <p className="text-sm text-muted-foreground">Creator: {creatorId}</p>
    </main>
  );
}
