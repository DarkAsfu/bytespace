import Image from "next/image";

const INNER_INSETS = {
  squiggle: { top: "0", right: "0.47%", bottom: "-0.47%", left: "-0.93%" },
  cone: { top: "-0.22%", right: "0.56%", bottom: "-0.28%", left: "-1.05%" },
} as const;

export function Decor({
  variant,
  image,
  color,
  left,
  top,
  width,
  height,
  flipX,
  style,
}: {
  variant: "squiggle" | "cone";
  image: string;
  color: string;
  left: number;
  top: number;
  width: number;
  height: number;
  flipX?: boolean;
  style?: React.CSSProperties;
}) {
  const inner = INNER_INSETS[variant];

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left,
        top,
        width,
        height,
        transform: flipX ? "scaleX(-1)" : undefined,
        isolation: "isolate",
        ...style,
      }}
    >
      <div style={{ position: "absolute", top: inner.top, right: inner.right, bottom: inner.bottom, left: inner.left }}>
        <Image
          src={image}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: color,
            mixBlendMode: "hard-light",
            maskImage: `url(${image})`,
            WebkitMaskImage: `url(${image})`,
            maskMode: "alpha",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            maskPosition: "0 0",
            WebkitMaskPosition: "0 0",
          }}
        />
      </div>
    </div>
  );
}