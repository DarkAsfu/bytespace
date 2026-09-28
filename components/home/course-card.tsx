import { type } from "@/lib/typography";

export interface Course {
  id: string;
  title: string;
  author: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  students: string;
  price: string;
  priceUnit: string;
  image: string;
  categories: string[];
}

const AVATARS = [
  "/images/avatar-1.png",
  "/images/avatar-2.png",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
];

function BadgeIcon({ name }: { name: "lessons" | "duration" | "comments" }) {
  const paths = {
    lessons: "M4 5.5A1.5 1.5 0 0 1 5.5 4H9v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Zm6-1.5h6A1.5 1.5 0 0 1 17.5 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-6V4Z",
    duration: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 1.8a7.2 7.2 0 1 0 0 14.4 7.2 7.2 0 0 0 0-14.4Zm-1 3h1.8v5.1l3.4 2-0.9 1.6-4.3-2.5V7.8Z",
    comments: "M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-4.2 3.4A.5.5 0 0 1 4 17V5.5Z",
  };
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d={paths[name]} />
    </svg>
  );
}

function BarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M5 19V11h2.5v8H5Zm5.75 0V5h2.5v14h-2.5Zm5.75 0v-6H19v6h-2.5Z" />
    </svg>
  );
}

export function CourseCard({ course }: { course: Course }) {
  const badges = [
    { key: "lessons" as const, text: `${course.lessons} Lessons` },
    { key: "duration" as const, text: course.duration },
    { key: "comments" as const, text: `${course.comments} Comments` },
  ];

  return (
    <article className="flex h-[384px] w-full max-w-[373px] shrink-0 flex-col overflow-hidden rounded-[24px] border border-shuttle-200 bg-white">
      <div className="relative h-[216px] w-full shrink-0 overflow-hidden bg-shuttle-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={course.image}
          alt=""
          width={682}
          height={454}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-3 bottom-3 flex flex-nowrap items-center gap-1.5">
          {badges.map((badge) => (
            <span
              key={badge.key}
              className="flex items-center gap-1 whitespace-nowrap rounded-full bg-white/85 px-2 py-1 text-shuttle-950"
            >
              <span className="shrink-0 scale-[0.85]">
                <BadgeIcon name={badge.key} />
              </span>
              <span className="font-satoshi text-[11px] leading-none">{badge.text}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className={`${type.headingXs} line-clamp-1 text-black-950`}>
            {course.title}
          </h3>
          <p className={`${type.bodyLFixed} flex shrink-0 items-center gap-1 text-black-700`}>
            {course.rating}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/icon-star.svg"
              alt=""
              width={12}
              height={11.46}
              className="shrink-0"
            />
          </p>
        </div>

        <p className={`${type.bodyXs} text-black-700`}>
          by <span className="text-persian-blue">{course.author}</span>
        </p>

        <div className="flex w-full items-center justify-between gap-4">
          <span className="flex shrink-0 items-center justify-center gap-1 rounded-full bg-shuttle-100 px-3 py-1.5">
            <BarIcon />
            <span className={type.bodyXs}>{course.level}</span>
          </span>
          <div className="flex items-center">
            {AVATARS.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt=""
                width={36}
                height={36}
                className="-mr-3 h-9 w-9 shrink-0 rounded-full border-2 border-white object-cover"
              />
            ))}
            <div className="relative -ml-3 h-9 w-9 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/avatar-more.svg" alt="" width={36} height={36} />
              <span className="absolute inset-0 flex items-center justify-center font-satoshi text-[10px] font-bold text-shuttle-950">
                {course.students}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-auto flex items-baseline gap-1">
          <span className="font-satoshi text-[20px] font-bold leading-none text-persian-blue">
            {course.price}
          </span>
          <span className={type.bodyXs}>{course.priceUnit}</span>
        </p>
      </div>
    </article>
  );
}
