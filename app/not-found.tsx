import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="text-muted-foreground">
        The page you are looking for does not exist or was moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
      >
        Back to Home
      </Link>
    </main>
  );
}
