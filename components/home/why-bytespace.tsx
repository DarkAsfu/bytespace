import Image from "next/image";
import { CourseCard } from "@/components/home/course-card";
import { GlowBlobs } from "@/components/home/glow-blobs";
import { HappyStudentsCard, LearningProgressCard } from "@/components/home/hero-cards";
import { TintedOrnament } from "@/components/home/ornaments";

const GROWTH_STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const CREATOR_FEATURES = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const FEATURE_COURSE = {
  id: "learn-figma-from-basic",
  title: "Learn Figma from Basic",
  author: "pumpari studio",
  rating: 4.5,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 99,
  level: "Beginner",
  students: "34+",
  price: "$25",
  priceUnit: "lifetime",
  image: "/images/courses/1.jpg",
  categories: [],
};

const REVENUE_CARDS = {
  total: { label: "Total Revenue", sub: "July 1-26", value: "$120.29" },
  ytd: { label: "Year to Date", sub: "2026", value: "$1,200.38" },
};

function FeatureHeading({ children }: { children: string }) {
  return (
    <h3 className="max-w-[620px] font-poppins text-[28px] font-semibold leading-[1.2] tracking-[-0.28px] text-shuttle-950 sm:text-[36px] lg:text-[44px] lg:leading-[52.8px] lg:tracking-[-0.44px]">
      {children}
    </h3>
  );
}

function FeatureBody({ children }: { children: string }) {
  return (
    <p className="max-w-[520px] font-satoshi text-[16px] font-normal leading-[1.6] text-shuttle-700 sm:text-[18px] lg:leading-[28.8px]">
      {children}
    </p>
  );
}

function ScaledStage({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative aspect-square w-full ${className}`}>
      <div className="absolute left-1/2 top-1/2 h-[569px] w-[569px] -translate-x-1/2 -translate-y-1/2 origin-center scale-[0.5] min-[400px]:scale-[0.62] sm:scale-100 lg:scale-[0.79] min-[1202px]:scale-100">
        {children}
      </div>
    </div>
  );
}

function StatColumn({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-poppins text-[32px] font-medium leading-[1.22] tracking-[-0.32px] text-persian-blue sm:text-[36px] lg:leading-[44px] lg:tracking-[-0.36px]">
        {value}
      </span>
      <span className="font-satoshi text-[16px] font-normal leading-[1.6] text-shuttle-700 sm:text-[18px] lg:leading-[28.8px]">
        {label}
      </span>
    </div>
  );
}

function RevenueCard({
  label,
  sub,
  value,
  showBar,
  showTrend,
  className,
}: {
  label: string;
  sub: string;
  value: string;
  showBar?: boolean;
  showTrend?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex shrink-0 flex-col gap-1 rounded-[12px] bg-persian-blue p-4 text-white ${className ?? "w-[171px]"}`}
    >
      <div className="flex flex-col">
        <span className="font-satoshi text-[12px] leading-tight text-white/90">{label}</span>
        <span className="font-satoshi text-[10px] leading-tight text-white/60">{sub}</span>
      </div>
      <span className="font-satoshi text-[22px] font-bold leading-none text-white">{value}</span>
      {showBar && (
        <div className="mt-1 h-[6px] w-full overflow-hidden rounded-full bg-white/25">
          <div className="h-full w-[85%] rounded-full bg-electric-lime" />
        </div>
      )}
      {showTrend && (
        <span className="mt-1 w-fit rounded-full bg-electric-lime px-2 py-1 font-satoshi text-[10px] font-bold leading-none text-shuttle-950">
          +20%
        </span>
      )}
    </div>
  );
}

export function WhyBytespace() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <GlowBlobs />

      {/* px-0 only once the viewport is wide enough for the 1202px cap —
          below that the container is full-bleed and still needs a gutter. */}
      <div className="relative mx-auto flex w-full max-w-[1202px] flex-col gap-20 px-5 py-16 sm:px-8 lg:gap-40 lg:py-28 min-[1202px]:px-0">
        {/* ---------- Block 1 ---------- */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <FeatureHeading>Your Path to Professional Growth Starts Here!</FeatureHeading>
            <FeatureBody>
              Explore our curated selection of courses tailored to enhance your capabilities
              and accelerate your career journey. Whether you are looking to sharpen specific
              skills, gain industry expertise, or embark on a new career path entirely, we have
              the resources you need.
            </FeatureBody>
            <div className="mt-2 flex flex-wrap items-start gap-12">
              {GROWTH_STATS.map((stat) => (
                <StatColumn key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Visual */}
          <ScaledStage>
            {/* Course card sits behind the photo, at natural width */}
            <div className="absolute left-0 top-[3%] w-[373px]">
              <CourseCard course={FEATURE_COURSE} />
            </div>
            {/* Photo overlaps the course card */}
            <Image
              src="/images/hero-person.png"
              alt=""
              width={516}
              height={483}
              className="absolute left-[62%] top-[6%] h-[88%] w-auto -translate-x-1/2 object-contain"
            />
            {/* Progress card: Figma top 213px, left 345px — nudged down/right */}
            <div className="absolute w-[232px]" style={{ left: 420, top: 240 }}>
              <LearningProgressCard />
            </div>
            <TintedOrnament
              image="/images/squiggle-2.png"
              color="#D4FB20"
              className="absolute"
              flipX
              rotate={-12}
              style={{ right: "-12%", top: "20%", width: 150, height: 150 }}
            />
          </ScaledStage>
        </div>

        {/* ---------- Block 2 ---------- */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <ScaledStage className="order-2 lg:order-1">
            <Image
              src="/images/girl.png"
              alt=""
              width={500}
              height={500}
              className="absolute left-[43%] -top-3 z-40 h-full w-auto -translate-x-1/2 object-contain"
            />
            <div className="absolute left-0 top-[5%] z-30">
              <RevenueCard {...REVENUE_CARDS.total} showBar className="w-[230px]" />
            </div>
            <div className="absolute left-0 top-[30%] z-30">
              <RevenueCard {...REVENUE_CARDS.ytd} showTrend className="w-[171px]" />
            </div>
            <div className="absolute right-0 top-[68%] z-100">
              <HappyStudentsCard />
            </div>
            <TintedOrnament
              image="/images/squiggle-2.png"
              color="#D4FB20"
              className="absolute"
              style={{ left: "58%", top: "20%", width: 160, height: 160 }}
            />
          </ScaledStage>

          <div className="flex flex-col gap-6 lg:order-2">
            <FeatureHeading>Create &amp; Manage Courses Easily.</FeatureHeading>
            <FeatureBody>
              ByteSpace supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </FeatureBody>
            <ul className="mt-2 flex flex-col gap-5">
              {CREATOR_FEATURES.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Image
                    src="/brand/icon-check-circle.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <span className="font-satoshi text-[16px] font-medium leading-[1.2] text-shuttle-950 sm:text-[18px] lg:leading-[21.6px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
