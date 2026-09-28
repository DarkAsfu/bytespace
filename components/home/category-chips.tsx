"use client";

const CATEGORIES = [
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

interface Props {
  active: string;
  onSelect: (category: string) => void;
}

function Chip({
  label,
  active,
  onSelect,
}: {
  label: string;
  active: boolean;
  onSelect: (category: string) => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={() => onSelect(label)}
      className={
        active
          ? "flex flex-col items-center justify-center rounded-[24px] bg-electric-lime px-4 py-3 text-center font-satoshi text-[16px] font-medium leading-[19.2px] text-shuttle-950"
          : "flex flex-col items-center justify-center rounded-[24px] bg-shuttle-50 px-4 py-3 text-center font-satoshi text-[16px] font-medium leading-[19.2px] text-shuttle-700 transition-colors hover:bg-shuttle-100"
      }
    >
      {label}
    </button>
  );
}

export function CategoryChips({ active, onSelect }: Props) {
  return (
    <div
      role="tablist"
      className="flex w-full flex-wrap items-center justify-center gap-3"
    >
      <Chip label="Featured" active={active === "Featured"} onSelect={onSelect} />
      {CATEGORIES.map((name) => (
        <Chip key={name} label={name} active={active === name} onSelect={onSelect} />
      ))}
      <span className="flex flex-col items-center justify-center rounded-[24px] px-4 py-3 text-center font-satoshi text-[16px] font-medium leading-[19.2px] text-persian-blue">
        + More
      </span>
    </div>
  );
}
