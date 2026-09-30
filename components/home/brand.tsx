import Link from "next/link";
import { routes } from "@/lib/routes";
import { type } from "@/lib/typography";

export function Brand({
  className = "",
  textClassName = "text-white",
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <Link
      href={routes.home()}
      className={`flex items-center gap-2 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-icon.svg"
        alt="ByteSpace"
        width={28.875}
        height={31.5}
        className="h-[26px] w-auto shrink-0 lg:h-[31.5px] lg:w-[28.875px]"
      />
      <span className={`${type.logo} whitespace-nowrap ${textClassName}`}>
        ByteSpace
      </span>
    </Link>
  );
}
