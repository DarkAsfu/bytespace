import { card, type } from "@/lib/typography";

const AVATARS = [
  "/images/avatar-1.png",
  "/images/avatar-2.png",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
  "/images/avatar-6.png",
  "/images/avatar-7.png",
];

export function LearningProgressCard() {
  return (
    <div className={`${card} gap-2`}>
      <p className={`${type.labelS} text-shuttle-950`}>Learning Progress</p>
      <div className="w-[200px]">
        <p className={`${type.bigNumber} text-shuttle-950`}>55%</p>
      </div>
      <div className="relative h-[8px] w-[200px] rounded-[24px] bg-progress-track">
        <div className="absolute left-0 top-0 h-[8px] w-[112px] rounded-[24px] bg-electric-lime" />
      </div>
    </div>
  );
}

export function HappyStudentsCard() {
  return (
    <div className={`${card} justify-center gap-2`}>
      <p className={`${type.labelM} w-[115px] text-shuttle-950`}>Happy Students</p>
      <div className="flex items-center">
        <span className={`${type.bodyXS} text-shuttle-950`}>4.5 </span>
        <span className={`${type.bodyXS} text-shuttle-400`}>(240)</span>
        <span className="relative inline-block h-4 w-4 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/icon-star.svg"
            alt=""
            width={13.1625}
            height={12.5676}
            style={{ position: "absolute", left: "8.87%", top: "6.92%" }}
          />
        </span>
      </div>
      <div className="flex">
        {AVATARS.map((src) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            width={43}
            height={43}
            className="-mr-4 h-[43px] w-[43px] shrink-0 rounded-full object-cover"
          />
        ))}
        <div className="relative ml-3 mt-[13px] h-[43px] w-[43px] shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/avatar-more.svg" alt="" width={43} height={43} />
          <span className="absolute inset-0 flex items-center justify-center font-satoshi text-[12px] font-bold leading-[1.5] text-shuttle-950">
            2K+
          </span>
        </div>
      </div>
    </div>
  );
}

export function UiUxDesignCard() {
  return (
    <div className={`${card} justify-center gap-2`}>
      <p className={`${type.labelM} text-shuttle-950`}>UI/UX Design</p>
      <div className="flex items-center gap-2 text-shuttle-400">
        <span className={type.bodyXS}>200 Courses</span>
        <span className="text-[10px] leading-[1.5]">•</span>
        <span className={type.bodyXS}>1000+ Students</span>
      </div>
    </div>
  );
}
