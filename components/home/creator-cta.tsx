import Link from "next/link";
import { routes } from "@/lib/routes";
import { TintedOrnament } from "@/components/home/ornaments";

const ORNAMENTS = [
  { image: "/images/squiggle-2.png", color: "#D4FB20", left: -130, top: -150, size: 385, rotate: 0 },
  { image: "/images/squiggle-2.png", color: "#F5F5F6", left: 205, top: 15, size: 175, rotate: 360 },
  { image: "/images/cone-triangle.png", color: "#D4FB20", left: 1095, top: 0, size: 188, rotate: 0 },
  { image: "/images/cone-triangle.png", color: "#F5F5F6", left: -35, top: 240, size: 188, rotate: 0 },
  { image: "/images/cone-cylinder.png", color: "#F5F5F6", left: 1285, top: 15, size: 370, rotate: 0 },
  { image: "/images/squiggle-1.png", color: "#D4FB20", left: 1215, top: 335, size: 330, rotate: 0 },
  { image: "/images/cone-ring.png", color: "#D4FB20", left: 70, top: 360, size: 342, rotate: 0 },
];

const MOBILE_ORNAMENTS = [
  {
    image: "/images/squiggle-2.png",
    color: "#D4FB20",
    style: {
      left: "-6%",
      top: "-5%",
      width: "clamp(100px, 34vw, 175px)",
      height: "clamp(100px, 34vw, 175px)",
    },
  },
  {
    image: "/images/cone-triangle.png",
    color: "#D4FB20",
    style: {
      right: "2%",
      top: "10%",
      width: "clamp(54px, 18vw, 92px)",
      height: "clamp(54px, 18vw, 92px)",
    },
  },
  {
    image: "/images/squiggle-1.png",
    color: "#fff",
    style: {
      right: "-7%",
      bottom: "-4%",
      width: "clamp(74px, 26vw, 132px)",
      height: "clamp(74px, 26vw, 132px)",
    },
  },
];

export function CreatorCta() {
  return (
    <section className="relative flex min-h-[510px] w-full flex-col items-center justify-center overflow-hidden bg-persian-blue px-5 py-16 sm:px-8 lg:h-[488px] lg:px-0 lg:py-0">
      {/* Grid background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/grid-bg.svg"
          alt=""
          style={{ position: "absolute", inset: "-0.2% -0.14% 0 0", width: "100%", height: "100%" }}
        />
      </div>

      {/* Below lg: 3 lime ornaments, viewport-anchored */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden"
      >
        {MOBILE_ORNAMENTS.map((o) => (
          <TintedOrnament
            key={o.image + o.style.top}
            image={o.image}
            color={o.color}
            className="absolute"
            style={o.style}
          />
        ))}
      </div>

      {/* lg and up: all 7 on a 1440×488 stage, scaled to the viewport */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block"
      >
        <div className="absolute left-1/2 top-1/2 h-[488px] w-[1440px] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.7] xl:scale-[0.88] min-[1440px]:scale-100">
          {ORNAMENTS.map((o) => (
            <TintedOrnament
              key={`${o.left}-${o.top}`}
              image={o.image}
              color={o.color}
              className="absolute"
              rotate={o.rotate}
              style={{ left: o.left, top: o.top, width: o.size, height: o.size }}
            />
          ))}
        </div>
      </div>

      {/* Content — above the decorations */}
      <div className="relative z-10 flex w-full max-w-[1202px] flex-col items-center text-center">
        {/* Heading M */}
        <h2 className="max-w-[720px] text-center font-poppins text-[28px] font-semibold leading-[1.2] tracking-[-0.28px] text-shuttle-50 sm:text-[36px] lg:text-[44px] lg:leading-[52.8px] lg:tracking-[-0.44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        {/* Body L */}
        <p className="mt-6 max-w-[1000px] text-center font-satoshi text-[16px] font-normal leading-[1.6] text-shuttle-50 sm:text-[18px] lg:mt-12 lg:leading-[28.8px]">
          Experience the collaboration of numerous creators and an expanding selection of
          courses. Register now and become a part of a community comprising over 10,000 local
          and international creators. Utilize our Course Editor, and showcase your expertise
          by publishing your finest course on the ByteSpace Course Library.
        </p>

        <Link
          href={routes.register()}
          className="mt-8 flex items-center justify-center gap-2 rounded-[24px] bg-electric-lime px-6 py-3 font-satoshi text-[16px] font-medium leading-[1.2] text-shuttle-950 lg:mt-10 lg:text-[18px]"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
