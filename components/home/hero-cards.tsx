const AVATARS = [
  "/images/avatar-1.png",
  "/images/avatar-2.png",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
  "/images/avatar-6.png",
  "/images/avatar-7.png",
];

const CARD_BASE =
  "flex flex-col rounded-[16px] bg-white p-4 backdrop-blur-[10px]";

export function LearningProgressCard() {
  return (
    <div style={{ position: "absolute", left: 842, top: 651 }} className={`${CARD_BASE} gap-2`}>
      <p className="type-label-s text-shuttle-950">Learning Progress</p>
      <div className="w-[200px]">
        <p className="type-big-number text-shuttle-950">55%</p>
      </div>
      <div className="relative h-[8px] w-[200px] rounded-[24px] bg-progress-track">
        <div className="absolute left-0 top-0 h-[8px] w-[112px] rounded-[24px] bg-electric-lime" />
      </div>
    </div>
  );
}

export function HappyStudentsCard() {
  return (
    <div
      style={{ position: "absolute", left: 328, top: 837, width: 258 }}
      className={`${CARD_BASE} justify-center gap-2`}
    >
      <p className="type-label-m w-[115px] text-shuttle-950">Happy Students</p>
      <div className="flex items-center">
        <span className="type-body-xs text-shuttle-950">4.5 </span>
        <span className="type-body-xs text-shuttle-400">(240)</span>
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
        <div
          className="relative ml-3 mt-[13px] h-[43px] w-[43px] shrink-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/avatar-more.svg" alt="" width={43} height={43} />
          <span className="absolute inset-0 flex items-center justify-center text-[12px] font-bold leading-[1.5] text-shuttle-950">
            2K+
          </span>
        </div>
      </div>
    </div>
  );
}

export function UiUxDesignCard() {
  return (
    <div
      style={{ position: "absolute", left: 404, top: 639 }}
      className={`${CARD_BASE} justify-center gap-2`}
    >
      <p className="type-label-m text-shuttle-950">UI/UX Design</p>
      <div className="flex items-center gap-2 text-shuttle-400">
        <span className="type-body-xs">200 Courses</span>
        <span className="text-[10px] leading-[1.5]">•</span>
        <span className="type-body-xs">1000+ Students</span>
      </div>
    </div>
  );
}
