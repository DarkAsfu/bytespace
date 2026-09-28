interface SectionHeaderProps {
  title: string;
  description: string;
}

/** Section title/description — Figma node 1:1695 (Heading M + Body L). */
export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <header className="flex w-full flex-col items-center gap-4 text-center">
      <h2 className="max-w-[620px] text-center font-poppins text-[28px] font-semibold leading-[1.2] tracking-[-0.28px] text-[#040819] sm:text-[36px] lg:text-[44px] lg:leading-[52.8px] lg:tracking-[-0.44px]">
        {title}
      </h2>
      <p className="max-w-[918px] text-center font-satoshi text-[16px] font-normal leading-[1.6] text-shuttle-400 sm:text-[18px] lg:leading-[28.8px]">
        {description}
      </p>
    </header>
  );
}
