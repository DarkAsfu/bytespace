const AUTH_AVATARS = [
  "/images/auth/avatar-a1.png",
  "/images/auth/avatar-a2.png",
  "/images/auth/avatar-a3.png",
  "/images/auth/avatar-a4.png",
];

const CHIPS = ["17 Lessons", "2 hours 16 mins", "59 Comments"];

export function AuthCourseCard({
  title,
  image,
  clipTitle,
  left,
  top,
}: {
  title: string;
  image: string;
  clipTitle?: boolean;
  left: number;
  top: number;
}) {
  return (
    <article
      style={{ position: "absolute", left, top, width: 373, height: 384 }}
      className="overflow-hidden rounded-[24px] border border-shuttle-200 bg-white"
    >
      {/* Thumbnail */}
      <div
        style={{ position: "absolute", left: 15, top: 15, width: 341, height: 195.145 }}
        className="overflow-hidden rounded-[12px] bg-[#443131]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="absolute inset-0 h-full w-full rounded-[12px] object-cover" />

        <div style={{ position: "absolute", left: 12, top: 150 }} className="flex gap-3">
          {CHIPS.map((chip) => (
            <span
              key={chip}
              className="flex items-center justify-center rounded-[24px] bg-[rgba(246,246,246,0.6)] px-3 py-1.5 font-satoshi text-[12px] font-medium leading-5 whitespace-nowrap text-black-700 backdrop-blur-[4px]"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div
        style={{ position: "absolute", left: 15, top: 231 }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col whitespace-nowrap">
          <h3
            className={`font-poppins text-[20px] font-semibold leading-7 tracking-[-0.2px] text-black-950 ${
              clipTitle ? "w-[275px] overflow-hidden text-ellipsis" : ""
            }`}
          >
            {title}
          </h3>
          <p className="font-satoshi text-[12px] leading-5 text-black-700">
            by <b className="font-normal text-persian-blue">purepearl studio</b>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center gap-1 rounded-[24px] bg-shuttle-50 px-3 py-1.5 font-satoshi text-[12px] font-medium leading-5 whitespace-nowrap text-shuttle-700">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/auth/level-icon.svg" alt="" width={20} height={20} />
            Beginner
          </span>

          <div className="flex items-start">
            {AUTH_AVATARS.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt=""
                width={32}
                height={32}
                className="-mr-2 h-8 w-8 rounded-full"
              />
            ))}
            <div className="relative h-8 w-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/auth/avatar-more.svg" alt="" width={32} height={32} />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-satoshi text-[12px] font-medium leading-5 whitespace-nowrap text-white">
                26+
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-end">
          <span
            style={{ width: 36, height: 24 }}
            className="flex items-center justify-center font-poppins text-[20px] font-semibold leading-7 tracking-[-0.2px] text-persian-blue"
          >
            <i className="not-italic font-medium">$</i>25
          </span>
          <span className="font-satoshi text-[12px] leading-5 whitespace-nowrap text-black-700">
            /lifetime
          </span>
        </div>
      </div>

      {/* Rating */}
      <div
        style={{ position: "absolute", left: 305, top: 231 }}
        className="flex items-center"
      >
        <span className="font-satoshi text-[18px] font-medium leading-7 whitespace-pre text-black-700">
          4.5{" "}
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/auth/star-rating.svg" alt="" width={24} height={24} />
      </div>
    </article>
  );
}