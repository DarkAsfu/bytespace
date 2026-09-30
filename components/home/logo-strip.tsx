import Image from "next/image";

const LOGOS = [
  { src: "/brand/logoipsum-1.svg", width: 167, height: 41, name: "Logoipsum" },
  { src: "/brand/logoipsum-2.svg", width: 168, height: 41, name: "Logoipsum" },
  { src: "/brand/logoipsum-3.svg", width: 170, height: 41, name: "Logoipsum" },
  { src: "/brand/logoipsum-4.svg", width: 170, height: 41, name: "Logoipsum" },
  { src: "/brand/logoipsum-5.svg", width: 169, height: 42, name: "Logoipsum" },
];

export function LogoStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-end justify-center gap-x-8 gap-y-6 sm:gap-x-12 lg:flex-nowrap lg:gap-x-[72px] ${className}`}
    >
      {LOGOS.map((logo) => (
        <Image
          key={logo.src}
          src={logo.src}
          alt={logo.name}
          width={logo.width}
          height={logo.height}
          className="h-auto w-auto shrink-0"
        />
      ))}
    </div>
  );
}
