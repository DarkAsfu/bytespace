import Image from "next/image";

export function AuthCanvas({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-full w-full justify-center overflow-x-auto bg-persian-blue">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/images/auth/grid.svg"
          alt=""
          fill
          style={{ position: "absolute", inset: "-0.2% -0.14% 0 0", objectFit: "cover" }}
        />
      </div>

      {children}
    </main>
  );
}
