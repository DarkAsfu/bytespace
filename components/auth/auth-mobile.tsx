import Link from "next/link";
import { routes } from "@/lib/routes";
import { TintedOrnament } from "@/components/home/ornaments";

/** Below `lg` the 1440 stage is replaced by this stacked layout. */
export function AuthMobile({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full overflow-hidden px-5 py-8 sm:px-8 lg:hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <TintedOrnament
          image="/images/squiggle-2.png"
          color="#D4FB20"
          className="absolute"
          style={{
            right: "-8%",
            top: "-4%",
            width: "clamp(90px, 30vw, 150px)",
            height: "clamp(90px, 30vw, 150px)",
          }}
        />
        <TintedOrnament
          image="/images/cone-ring.png"
          color="#D4FB20"
          className="absolute"
          style={{
            left: "-12%",
            bottom: "4%",
            width: "clamp(100px, 34vw, 170px)",
            height: "clamp(100px, 34vw, 170px)",
          }}
        />
      </div>

      {/* Capped so tablets get a centred card instead of a full-bleed form. */}
      <div className="relative z-10 mx-auto w-full max-w-[560px]">
        <Link href={routes.home()} aria-label="ByteSpace" className="inline-block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-icon.svg"
            alt="ByteSpace"
            width={28.875}
            height={31.5}
            className="h-[31.5px] w-[28.875px]"
          />
        </Link>

        <h2 className="mt-8 font-poppins text-[24px] font-semibold leading-[1.25] tracking-[-0.24px] text-shuttle-50 sm:text-[28px]">
          {title}
        </h2>
        <p className="mt-3 max-w-[420px] font-satoshi text-[15px] leading-[1.6] text-shuttle-50 sm:text-[16px]">
          {description}
        </p>

        <div className="mt-8 rounded-[24px] bg-white p-6 sm:p-8">{children}</div>
      </div>
    </div>
  );
}