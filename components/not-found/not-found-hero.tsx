import Link from "next/link";
import { Navbar } from "@/components/home/navbar";
import { MobileHeader } from "@/components/home/mobile-header";
import { routes } from "@/lib/routes";
import { type } from "@/lib/typography";
import Image from "next/image";

const HEADING = "The page you are looking for doesn\u2019t exist";
const SUBHEADING =
  "Try to use a correct url or go back to homepage to start again";

const BIG_404_GRADIENT =
  "linear-gradient(180deg, rgb(212,251,32) 0%, rgba(212,251,32,.96) 25%, rgba(212,251,32,.81) 50.5%, rgba(212,251,32,.61) 68%, rgba(255,255,255,0) 100%)";

function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <Image
        src="/images/not-found/grid.svg"
        alt=""
        fill
        style={{
          position: "absolute",
          inset: "-0.2% -0.14% 0 0",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

function Big404({ className = "" }: { className?: string }) {
  return (
    <p
      aria-hidden="true"
      style={{
        backgroundImage: BIG_404_GRADIENT,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
      className={`font-poppins font-semibold whitespace-nowrap text-center ${className}`}
    >
      404
    </p>
  );
}

function BackToHomeButton() {
  return (
    <Link
      href={routes.home()}
      className="flex items-center justify-center rounded-[24px] bg-electric-lime px-6 py-3 font-satoshi text-[18px] font-medium leading-[1.2] text-shuttle-950"
    >
      Back to Home
    </Link>
  );
}

export function NotFoundHero() {
  return (
    <section className="relative w-full overflow-hidden bg-persian-blue">
      <div className="relative hidden w-full lg:block lg:h-[957px]">
        <Big404 className="absolute left-1/2 top-[160px] -translate-x-1/2 text-[480px] leading-[1] tracking-[-4.8px]" />
        <GridBackground />

        <div
          style={{ position: "absolute", left: "calc(50% + 0.5px)", top: 521 }}
          className="flex w-full -translate-x-1/2 flex-col items-center gap-8 px-6"
        >
          <h1 className={`${type.heading} w-[935px] max-w-full text-white text-center`}>
            {HEADING}
          </h1>
          <p className={`${type.bodyL} text-shuttle-100 lg:whitespace-nowrap`}>
            {SUBHEADING}
          </p>
          <BackToHomeButton />
        </div>

        <Navbar />
      </div>

      <div className="relative isolate w-full lg:hidden">
        <MobileHeader />

        <div className="flex flex-col items-center px-5">
          <Big404 className="relative -z-10 text-[clamp(120px,42vw,340px)] leading-[1] tracking-[-0.02em]" />
        </div>

        <GridBackground />

        <div className="relative z-10 flex flex-col items-center gap-6 px-5 pb-14 text-center">
          <h1 className={`${type.heading} max-w-[520px] text-white`}>
            {HEADING}
          </h1>
          <p className={`${type.bodyL} max-w-[520px] text-shuttle-100`}>
            {SUBHEADING}
          </p>
          <BackToHomeButton />
        </div>
      </div>
    </section>
  );
}
