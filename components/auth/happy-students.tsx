import Image from "next/image";

const HAPPY_AVATARS = [
  "/images/auth/happy-a1.png",
  "/images/auth/happy-a2.png",
  "/images/auth/happy-a3.png",
  "/images/auth/happy-a4.png",
  "/images/auth/happy-a5.png",
  "/images/auth/happy-a6.png",
  "/images/auth/happy-a7.png",
];

export function HappyStudentsLime() {
  return (
    <aside
      style={{ position: "absolute", left: 348, top: 740, width: 258, padding: 16 }}
      className="flex flex-col justify-center gap-2 rounded-[16px] bg-electric-lime backdrop-blur-[10px]"
    >
      <div>
        <div className="font-satoshi text-[16px] font-medium leading-6 whitespace-nowrap text-shuttle-950">
          Happy Students
        </div>
        <div className="flex items-center font-satoshi text-[10px] leading-[1.5] whitespace-nowrap text-shuttle-800">
          <span>
            <b className="font-bold text-shuttle-950">4.5 </b>(240)
          </span>
          <span className="relative block h-4 w-4">
            <Image
              src="/images/auth/star-16.svg"
              alt=""
              width={13.1625}
              height={12.5676}
              style={{ position: "absolute", top: "6.92%", right: "8.87%", bottom: "14.53%", left: "8.87%" }}
            />
          </span>
        </div>
      </div>

      <div className="flex items-start">
        {HAPPY_AVATARS.map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={43}
            height={43}
            className="-mr-4 h-[43px] w-[43px] rounded-full"
          />
        ))}
        <div className="relative grid h-[43px] w-[43px]">
          <Image
            src="/images/auth/happy-more.svg"
            alt=""
            width={43}
            height={43}
            className="[grid-area:1/1] h-[43px] w-[43px]"
          />
          <span className="[grid-area:1/1] ml-[9px] mt-[13px] font-satoshi text-[12px] font-bold leading-[1.5] text-shuttle-50">
            2K+
          </span>
        </div>
      </div>
    </aside>
  );
}