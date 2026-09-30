import type { Metadata } from "next";
import { NotFoundHero } from "@/components/not-found/not-found-hero";
import { SiteFooter } from "@/components/home/site-footer";
export const metadata: Metadata = {
  title: "404 \u2013 Page not found \u00b7 ByteSpace",
};

export default function NotFound() {
  return (
    <>
      <NotFoundHero />
      <SiteFooter />
    </>
  );
}
