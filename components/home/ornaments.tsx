import Image from "next/image";

type OrnamentKind = "frame" | "cone";

interface Ornament {
  kind: OrnamentKind;
  offsetX: number;
  top: number;
  width: number;
  height: number;
  image: string;
  color: string;
  flipX?: boolean;
}

const ORNAMENTS: Ornament[] = [
  { kind: "frame", offsetX: 407, top: 672, width: 330, height: 330, image: "/images/squiggle-1.png", color: "#F5F5F6" },
  { kind: "frame", offsetX: -838, top: 221, width: 385, height: 385, image: "/images/squiggle-2.png", color: "#D4FB20" },
  { kind: "frame", offsetX: -537, top: 477, width: 175, height: 175, image: "/images/squiggle-2.png", color: "#F5F5F6", flipX: true },
  { kind: "cone", offsetX: -702, top: 682, width: 342, height: 342, image: "/images/cone-ring.png", color: "#F5F5F6" },
  { kind: "cone", offsetX: 511, top: 221, width: 370, height: 370, image: "/images/cone-cylinder.png", color: "#D4FB20" },
  { kind: "cone", offsetX: 386, top: 464, width: 188, height: 188, image: "/images/cone-triangle.png", color: "#F5F5F6" },
];

const SHADOW = "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.10))";
const SOURCE_FILTER = `contrast(0.55) brightness(1.06) ${SHADOW}`;

export function TintedOrnament({
  image,
  color,
  className = "",
  style,
  flipX,
  rotate,
  alt = "",
}: {
  image: string;
  color: string;
  className?: string;
  style?: React.CSSProperties;
  flipX?: boolean;
  rotate?: number;
  alt?: string;
}) {
  const transform = [flipX ? "scaleX(-1)" : null, rotate ? `rotate(${rotate}deg)` : null]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={className}
      style={{ ...style, transform: transform || undefined, isolation: "isolate" }}
    >
      <Image
        src={image}
        alt={alt}
        fill
        style={{ objectFit: "cover", filter: SOURCE_FILTER }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: color,
          mixBlendMode: "hard-light",
          maskImage: `url(${image})`,
          WebkitMaskImage: `url(${image})`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "0 0",
          WebkitMaskPosition: "0 0",
        }}
      />
    </div>
  );
}

export function HeroOrnaments() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
      {ORNAMENTS.map((o) => (
        <TintedOrnament
          key={`${o.offsetX}-${o.top}`}
          image={o.image}
          color={o.color}
          flipX={o.flipX}
          className="absolute"
          style={{
            left: `calc(50% + ${o.offsetX}px)`,
            top: o.top,
            width: o.width,
            height: o.height,
          }}
        />
      ))}
    </div>
  );
}
