import { GlowBlobs } from "@/components/home/glow-blobs";
import { type } from "@/lib/typography";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  /* TODO: replace with the exported testimonial photos */
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatar-2.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatar-4.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatar-6.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-5 pb-16 sm:px-8 lg:px-[120px] lg:py-24">
      <GlowBlobs />

      <div className="relative mx-auto flex w-full max-w-[1199px] flex-col gap-10 lg:gap-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Heading M — max-w derived from the design's line break */}
          <h2 className="max-w-[520px] font-poppins text-[28px] font-semibold leading-[1.2] tracking-[-0.28px] text-black-950 sm:text-[36px] lg:text-[44px] lg:leading-[52.8px] lg:tracking-[-0.44px]">
            Discover What Our Community Is Saying
          </h2>
          {/* Body L */}
          <p className={`${type.bodyL} max-w-[560px] text-black-700`}>
            At ByteSpace, our vibrant community of learners and creators is at the heart of
            what we do. Hear directly from those who have experienced the transformative
            journey of learning and creating on our platform. Explore testimonials that
            reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:gap-10">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.name}
              className="flex flex-col items-start gap-6 rounded-[24px] bg-white p-6 shadow-[0_18px_40px_rgba(0,59,226,0.08)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.avatar}
                alt=""
                width={80}
                height={80}
                className="h-[80px] w-[80px] shrink-0 rounded-full object-cover"
              />
              <div className="flex flex-col">
                {/* Heading XS */}
                <h3 className="font-poppins text-[20px] font-semibold leading-[24px] tracking-[-0.2px] text-black-950">
                  {item.name}
                </h3>
                {/* Body L */}
                <p className="font-satoshi text-[18px] font-normal leading-[28.8px] text-persian-blue">
                  {item.role}
                </p>
              </div>
              {/* Body L */}
              <p className="font-satoshi text-[18px] font-normal leading-[28.8px] text-black-700">
                &ldquo;{item.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}