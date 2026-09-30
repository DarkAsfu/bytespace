"use client";

import { useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { type } from "@/lib/typography";
import { Brand } from "@/components/home/brand";

const LINKS = [
  { label: "Home", href: routes.home() },
  { label: "Courses", href: routes.courses() },
  { label: "Creators", href: routes.creators() },
];

const ACCOUNT_LINKS = [
  { label: "Sign In", href: routes.login() },
  { label: "Join Us", href: routes.register() },
];

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 w-full">
      <div className="flex h-16 items-center justify-between px-5">
        <Brand />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
        >
          {open ? (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="absolute inset-x-0 top-16 flex flex-col gap-1 border-t border-white/10 bg-persian-blue px-5 pb-6 pt-2 shadow-2xl shadow-black/20">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`${type.bodyL} rounded-lg px-2 py-3 text-shuttle-50 transition-colors hover:bg-white/10`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-4 border-t border-white/10 pt-4">
            {ACCOUNT_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${type.bodyM} rounded-lg px-2 py-2 text-shuttle-50 transition-colors hover:bg-white/10`}
              >
                {link.label}
              </Link>
            ))}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/icon-bag.svg"
              alt="Cart"
              width={24}
              height={24}
              className="ml-auto shrink-0"
            />
          </div>
        </nav>
      )}
    </header>
  );
}
