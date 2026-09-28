import { Navbar } from "@/components/home/navbar";
import { MobileHeader } from "@/components/home/mobile-header";
import { HeroSearchBar } from "@/components/home/search-bar";
import { HeroOrnaments } from "@/components/home/ornaments";
import {
  HappyStudentsCard,
  LearningProgressCard,
  UiUxDesignCard,
} from "@/components/home/hero-cards";
import { type } from "@/lib/typography";

const HEADING = "Get Access to Hundreds Courses Available";
const SUBHEADING =
  "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.";

function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/grid-bg.svg"
        alt=""
        style={{ position: "absolute", inset: "-0.2% -0.14% 0 0", width: "100%", height: "100%" }}
      />
    </div>
  );
}

function HeroPhoto({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/hero-person.png"
      alt="Student learning with ByteSpace"
      className={className}
      style={style}
    />
  );
}

export function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-persian-blue">
      {/* ---------- Desktop / large: exact 1440 composition ---------- */}
      <div className="relative hidden w-full lg:block lg:h-[1024px]">
        <GridBackground />

        {/* Big circle */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/big-circle.svg"
          alt=""
          width={1149}
          height={1149}
          style={{
            position: "absolute",
            top: 582,
            left: "calc(50% - 0.5px)",
            transform: "translateX(-50%)",
          }}
        />

        {/* Hero content */}
        <div
          style={{ position: "absolute", left: "50%", top: 169, transform: "translateX(-50%)" }}
          className="flex w-[1200px] max-w-full flex-col items-center gap-[60px] px-6"
        >
          <div className="flex w-full flex-col items-center gap-8 text-center">
            <h1 className={`${type.heading} w-[935px] max-w-full text-white`}>
              {HEADING}
            </h1>
            <p className={`${type.bodyL} text-shuttle-100`}>{SUBHEADING}</p>
          </div>
          <HeroSearchBar />
        </div>

        <Navbar />

        {/* Main photo */}
        <HeroPhoto
          style={{
            position: "absolute",
            left: "50%",
            top: 512,
            width: 578,
            height: 541,
            transform: "translateX(-50%)",
            objectFit: "cover",
          }}
        />

        {/* Cards, below ornaments — offsets are from the frame centre */}
        <div style={{ position: "absolute", left: "calc(50% + 122px)", top: 651 }}>
          <LearningProgressCard />
        </div>
        <div style={{ position: "absolute", left: "calc(50% - 392px)", top: 837, width: 258 }}>
          <HappyStudentsCard />
        </div>

        <HeroOrnaments />

        {/* UI/UX card is the topmost layer */}
        <div style={{ position: "absolute", left: "calc(50% - 316px)", top: 639 }}>
          <UiUxDesignCard />
        </div>
      </div>

      {/* ---------- Mobile / tablet ---------- */}
      <div className="relative w-full lg:hidden">
        <GridBackground />
        <MobileHeader />

        <div className="relative flex flex-col items-center gap-8 px-5 pb-16 pt-4 text-center">
          <h1 className={`${type.heading} max-w-[600px] text-white`}>{HEADING}</h1>
          <p className={`${type.bodyL} max-w-[520px] text-shuttle-100 lg:whitespace-nowrap`}>
            {SUBHEADING}
          </p>

          <HeroSearchBar />

          <div className="relative mt-2 flex w-full justify-center">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cbfc01] sm:h-[360px] sm:w-[360px]"
            />
            <HeroPhoto
              className="relative w-[250px] max-w-[75%] object-contain sm:w-[330px]"
            />
          </div>

          <div className="mt-4 flex w-full max-w-[300px] flex-col gap-4">
            <LearningProgressCard />
            <HappyStudentsCard />
            <UiUxDesignCard />
          </div>
        </div>
      </div>
    </section>
  );
}
