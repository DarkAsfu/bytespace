import { SectionHeader } from "@/components/home/section-header";

const CATEGORY_CARDS: { label: string; icon: string; size: number }[] = [
  { label: "Design", icon: "/brand/category-design.svg", size: 27 },
  { label: "Development", icon: "/brand/category-development.svg", size: 36 },
  { label: "IT & Software", icon: "/brand/category-it.svg", size: 36 },
  { label: "Business", icon: "/brand/category-business.svg", size: 36 },
  { label: "Marketing", icon: "/brand/category-marketing.svg", size: 36 },
  { label: "Photography", icon: "/brand/category-photography.svg", size: 36 },
];

export function LearningCategories() {
  return (
    <section className="flex w-full flex-col bg-white px-5 pb-20 sm:px-8 lg:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1202px] flex-col gap-10">
        <SectionHeader
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <div className="flex w-full flex-wrap items-start content-start gap-10">
          {CATEGORY_CARDS.map((card) => (
            <div
              key={card.label}
              className="flex h-[168px] w-full max-w-[167px] shrink-0 flex-col items-center justify-center gap-4 rounded-[24px] border border-shuttle-200 bg-white px-4 py-6"
            >
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-electric-lime">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.icon}
                  alt=""
                  width={card.size}
                  height={card.size}
                  className="shrink-0"
                />
              </div>
              <p className="text-center font-satoshi text-[15px] font-medium leading-[1.2] text-shuttle-950">
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
