import { Brand } from "@/components/home/brand";
import { routes } from "@/lib/routes";
import { type } from "@/lib/typography";

const LINK_COLUMNS = [
  [
    { label: "Featured Courses", href: routes.courses() },
    { label: "Featured Categories", href: routes.courses() },
    { label: "Business", href: routes.search("Business") },
    { label: "IT", href: routes.search("IT") },
    { label: "Design", href: routes.search("Design") },
  ],
  [
    { label: "Development", href: routes.search("Development") },
    { label: "Marketing", href: routes.search("Marketing") },
    { label: "Photography", href: routes.search("Photography") },
    { label: "Finance", href: routes.search("Finance") },
    { label: "Sport", href: routes.search("Sport") },
  ],
  [
    { label: "Become a Creator", href: routes.register() },
    { label: "Affiliate Program", href: routes.search("Affiliate Program") },
    { label: "Contact", href: routes.search("Contact") },
    { label: "Help", href: routes.search("Help") },
    { label: "About", href: routes.home() },
  ],
];

const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export function SiteFooter() {
  return (
    <footer className="w-full bg-white px-5 pb-8 pt-14 sm:px-8 lg:px-[120px] lg:pb-12 lg:pt-[70px]">
      <div className="mx-auto w-full max-w-[1202px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Brand
              textClassName="text-shuttle-950"
              className="w-fit"
            />

            <p className={`${type.bodyS} max-w-[460px] text-shuttle-950`}>
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form
              action={routes.search()}
              className="flex w-full items-start gap-3 sm:gap-[41px]"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="h-[52px] w-full min-w-0 flex-1 appearance-none rounded-full border border-shuttle-200 bg-white px-6 font-satoshi text-[16px] text-shuttle-950 outline-none placeholder:text-shuttle-950 sm:max-w-[376px] sm:flex-none"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center justify-center gap-2 rounded-[24px] bg-electric-lime px-6 py-3 font-satoshi text-[16px] font-medium leading-[1.2] text-shuttle-950 sm:text-[18px]"
              >
                Search
              </button>
            </form>

            <p className={`${type.bodyS} max-w-[470px] text-shuttle-950`}>
              By subscribing, you agree to our Privacy Policy and consent to receive updates
              from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-0">
            {LINK_COLUMNS.map((column) => (
              <div key={column[0].label} className="flex flex-col gap-5 lg:gap-6">
                {column.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`${type.bodyS} text-shuttle-950 transition-colors hover:text-persian-blue`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-shuttle-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-satoshi text-[14px] text-shuttle-950">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {LEGAL_LINKS.map((label) => (
              <a
                key={label}
                href={routes.home()}
                className="font-satoshi text-[14px] text-shuttle-950 transition-colors hover:text-persian-blue"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}