import { routes } from "@/lib/routes";

export function HeroSearchBar() {
  return (
    <form action={routes.search()} className="flex items-start gap-4">
      <div className="flex h-[52px] w-[461px] items-center gap-2 rounded-[24px] bg-white px-6 py-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/icon-search.svg" alt="" width={24} height={24} className="shrink-0" />
        <input
          type="text"
          name="q"
          placeholder="Course, topic, creator"
          className="type-body-l w-full min-w-0 appearance-none border-0 bg-transparent text-shuttle-400 outline-none placeholder:text-shuttle-400"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center rounded-[24px] bg-electric-lime px-6 py-3"
      >
        <span className="type-label-l text-shuttle-950">Search</span>
      </button>
    </form>
  );
}
