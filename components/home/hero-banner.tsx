import { Navbar } from "@/components/home/navbar";
import { HeroSearchBar } from "@/components/home/search-bar";
import { HeroOrnaments } from "@/components/home/ornaments";
import {
  HappyStudentsCard,
  LearningProgressCard,
  UiUxDesignCard,
} from "@/components/home/hero-cards";

export function HeroBanner() {
  return (
    <section
      style={{ width: "100%", height: 1024, position: "relative", overflow: "hidden" }}
      className="bg-persian-blue"
    >
      {/* 1. Grid background */}
      <div style={{ position: "absolute", left: 0, top: 0, width: "100%", height: 1024 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/grid-bg.svg"
          alt=""
          style={{ position: "absolute", inset: "-0.2% -0.14% 0 0", width: "100%", height: "100%" }}
        />
      </div>

      {/* 2. Big circle */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/big-circle.svg"
        alt=""
        width={1149}
        height={1149}
        style={{ position: "absolute", top: 582, left: "calc(50% - 0.5px)", transform: "translateX(-50%)" }}
      />

      {/* 3. Hero content */}
      <div
        style={{ position: "absolute", left: "50%", top: 169, width: 1200, transform: "translateX(-50%)" }}
        className="flex flex-col items-center gap-[60px]"
      >
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 style={{ width: 935 }} className="type-heading-l text-white">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="type-body-l whitespace-nowrap text-shuttle-100">
            Unlock your creativity, gain valuable knowledge, and grow your business with our
            wide range of courses.
          </p>
        </div>
        <HeroSearchBar />
      </div>

      {/* 4. Header */}
      <Navbar />

      {/* 5. Main photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-person.png"
        alt="Student learning with ByteSpace"
        width={578}
        height={541}
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

      {/* 6. Learning Progress card */}
      <LearningProgressCard />

      {/* 7. Happy Students card */}
      <HappyStudentsCard />

      {/* 8. 3D ornaments */}
      <HeroOrnaments />

      {/* 9. UI/UX Design card (topmost) */}
      <UiUxDesignCard />
    </section>
  );
}
