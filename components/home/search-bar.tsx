import Image from "next/image";
import { routes } from "@/lib/routes";
import { type } from "@/lib/typography";

export function HeroSearchBar() {
  return (
    <form
      action={routes.search()}
      className="flex w-full max-w-[500px] items-start gap-3 sm:gap-4"
    >
      <div className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-[24px] bg-white px-5 py-3 sm:px-6 lg:w-[461px] lg:flex-none">
        <Image
          src="/brand/icon-search.svg"
          alt=""
          width={24}
          height={24}
          className="shrink-0"
        />
        <input
          type="text"
          name="q"
          placeholder="Course, topic, creator"
          className={`${type.bodyL} w-full min-w-0 appearance-none border-0 bg-transparent text-shuttle-400 outline-none placeholder:text-shuttle-400`}
        />
      </div>
      <button
        type="submit"
        className="flex shrink-0 items-center justify-center rounded-[24px] bg-electric-lime px-5 py-3 sm:px-6"
      >
        <span className={`${type.labelL} whitespace-nowrap text-shuttle-950`}>
          Search
        </span>
      </button>
    </form>
  );
}
