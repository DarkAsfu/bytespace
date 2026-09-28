export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm dark:bg-zinc-950">
        {children}
      </div>
    </div>
  );
}
