type OrnamentKind = "frame" | "cone";

interface Ornament {
  kind: OrnamentKind;
  /** Horizontal offset from the frame's horizontal centre (px at the 1440 reference). */
  offsetX: number;
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
    offsetX: 407,
    top: 672,
    width: 330,
    height: 330,
    image: "/images/squiggle-1.png",
    color: "#F5F5F6",
  },
  {
    kind: "frame",
    offsetX: -838,
    top: 221,
    width: 385,
    height: 385,
    image: "/images/squiggle-2.png",
    color: "#D4FB20",
  },
  {
    kind: "frame",
    offsetX: -537,
    top: 477,
    width: 175,
    height: 175,
    image: "/images/squiggle-2.png",
    color: "#F5F5F6",
    flipX: true,
  },
  {
    kind: "cone",
    offsetX: -702,
    top: 682,
    width: 342,
    height: 342,
    image: "/images/cone-ring.png",
    color: "#F5F5F6",
  },
  {
    kind: "cone",
    offsetX: 511,
    top: 221,
    width: 370,
    height: 370,
    image: "/images/cone-cylinder.png",
    color: "#D4FB20",
  },
  {
    kind: "cone",
    offsetX: 386,
    top: 464,
    width: 188,
    height: 188,
    image: "/images/cone-triangle.png",
    color: "#F5F5F6",
  },
];

const SHADOW = "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.10))";

/**
 * The matcap PNGs carry hard-baked shading. Left raw, `hard-light` amplifies
 * that into harsh dark edges, so contrast is pulled down before tinting.
 */
const SOURCE_FILTER = `contrast(0.55) brightness(1.06) ${SHADOW}`;

export function HeroOrnaments() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
      {ORNAMENTS.map((o) => (
        <div
          key={`${o.offsetX}-${o.top}`}
          style={{
            position: "absolute",
            left: `calc(50% + ${o.offsetX}px)`,
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
                filter: SOURCE_FILTER,
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
    </div>
  );
}
