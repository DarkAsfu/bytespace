type OrnamentKind = "frame" | "cone";

interface Ornament {
  kind: OrnamentKind;
  left: number;
  top: number;
  width: number;
  height: number;
  image: string;
  color: string;
  flipX?: boolean;
}

const ORNAMENTS: Ornament[] = [
  {
    kind: "frame",
    left: 1127,
    top: 672,
    width: 330,
    height: 330,
    image: "/images/squiggle-1.png",
    color: "#F5F5F6",
  },
  {
    kind: "frame",
    left: -118,
    top: 221,
    width: 385,
    height: 385,
    image: "/images/squiggle-2.png",
    color: "#D4FB20",
  },
  {
    kind: "frame",
    left: 183,
    top: 477,
    width: 175,
    height: 175,
    image: "/images/squiggle-2.png",
    color: "#F5F5F6",
    flipX: true,
  },
  {
    kind: "cone",
    left: 18,
    top: 682,
    width: 342,
    height: 342,
    image: "/images/cone-ring.png",
    color: "#F5F5F6",
  },
  {
    kind: "cone",
    left: 1231,
    top: 221,
    width: 370,
    height: 370,
    image: "/images/cone-cylinder.png",
    color: "#D4FB20",
  },
  {
    kind: "cone",
    left: 1106,
    top: 464,
    width: 188,
    height: 188,
    image: "/images/cone-triangle.png",
    color: "#F5F5F6",
  },
];

const SHADOW = [
  "drop-shadow(6px 8px 12px rgba(0, 0, 0, 0.10))",
  "drop-shadow(3px 4px 6px rgba(0, 0, 0, 0.08))",
  "drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.06))",
].join(" ");

export function HeroOrnaments() {
  return (
    <>
      {ORNAMENTS.map((o) => (
        <div
          key={`${o.left}-${o.top}`}
          style={{
            position: "absolute",
            left: o.left,
            top: o.top,
            width: o.width,
            height: o.height,
            transform: o.flipX ? "scaleX(-1)" : undefined,
          }}
        >
          <div style={{ position: "absolute", inset: 0, isolation: "isolate" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={o.image}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: SHADOW,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: o.color,
                mixBlendMode: "hard-light",
                maskImage: `url(${o.image})`,
                WebkitMaskImage: `url(${o.image})`,
                maskSize: "100% 100%",
                WebkitMaskSize: "100% 100%",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "0 0",
                WebkitMaskPosition: "0 0",
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
}
