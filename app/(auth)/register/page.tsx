import type { Metadata } from "next";
import { RegisterStage } from "@/components/auth/register-stage";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new account.",
};

export default function RegisterPage() {
  return (
    <main className="relative flex min-h-full w-full justify-center overflow-x-auto bg-persian-blue">
      {/* Full-bleed grid — the stage is fixed at 1440px, so the grid has to live
          out here to cover viewports wider than the artboard. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/auth/grid.svg"
          alt=""
          style={{ position: "absolute", top: "-0.2%", right: "-0.14%", bottom: 0, left: 0, width: "100%", height: "100%" }}
        />
      </div>

      <RegisterStage />
    </main>
  );
}