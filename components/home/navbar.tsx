import Link from "next/link";
import { routes } from "@/lib/routes";

const CENTER_LINKS = [
  { label: "Home", href: routes.home(), className: "font-medium leading-[1.2]" },
  { label: "Courses", href: routes.courses(), className: "font-normal leading-[1.6]" },
  { label: "Creators", href: routes.creators(), className: "font-normal leading-[1.6]" },
];

const RIGHT_LINKS = [
  { label: "Sign In", href: routes.login() },
  { label: "Join Us", href: routes.register() },
];

export function Navbar() {
  return (
    <header
      style={{ position: "absolute", left: 0, top: 0, width: "100%", height: 120, overflow: "clip" }}
      className="font-satoshi text-[16px] text-shuttle-50"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-icon.svg"
        alt="ByteSpace"
        width={28.875}
        height={31.5}
        style={{ position: "absolute", left: 122, top: 35 }}
      />
      <Link
        href={routes.home()}
        className="type-logo absolute whitespace-nowrap text-shuttle-50"
        style={{ left: 159, top: 42 }}
      >
        ByteSpace
      </Link>

      <nav
        style={{
          position: "absolute",
          left: "calc(50% - 0.5px)",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="flex items-baseline gap-6 whitespace-nowrap"
      >
        {CENTER_LINKS.map((link) => (
          <Link key={link.label} href={link.href} className={link.className}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div
        style={{ position: "absolute", right: 120, top: 48 }}
        className="flex items-center justify-end gap-6"
      >
        {RIGHT_LINKS.map((link) => (
          <Link key={link.label} href={link.href} className="leading-[24px]">
            {link.label}
          </Link>
        ))}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/icon-bag.svg" alt="Cart" width={24} height={24} className="shrink-0" />
      </div>
    </header>
  );
}
