/**
 * ByteSpace type scale — Figma node 1:1695.
 * Values are exact at `lg` (the 1440px reference frame); smaller sizes step
 * down for tablet/mobile.
 */
export const type = {
  heading: "font-poppins font-semibold leading-[1.2] tracking-[-0.34px] text-[34px] sm:text-[44px] lg:text-[72px] lg:tracking-[-0.72px]",
  bigNumber:
    "font-poppins font-semibold leading-[1.2] tracking-[-0.36px] text-[36px] lg:text-[48px] lg:tracking-[-0.48px]",
  bodyL: "font-satoshi font-normal leading-[1.6] text-[15px] sm:text-[16px] lg:text-[18px]",
  labelL:
    "font-satoshi font-medium leading-[1.2] text-[16px] lg:text-[18px]",
  labelM:
    "font-satoshi font-medium leading-[1.2] text-[15px] lg:text-[16px]",
  bodyM:
    "font-satoshi font-normal leading-[1.5] text-[15px] lg:text-[16px] lg:leading-[24px]",
  labelS:
    "font-satoshi font-medium leading-[1.2] text-[13px] lg:text-[14px]",
  bodyXS: "font-satoshi font-normal leading-[1.6] text-[11px] lg:text-[12px]",
  logo: "font-clash-display font-bold leading-none text-[20px] lg:text-[24px]",
} as const;

export const card =
  "flex flex-col rounded-[16px] bg-white p-4 text-left backdrop-blur-[10px]";
