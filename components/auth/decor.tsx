const INNER_INSETS = {
  squiggle: { top: "0", right: "0.47%", bottom: "-0.47%", left: "-0.93%" },
  cone: { top: "-0.22%", right: "0.56%", bottom: "-0.28%", left: "-1.05%" },
} as const;

/**
 * 3D matcap decoration with a hard-light colour layer.
 *
 * The colour layer is masked by the matcap itself rather than by a separate
 * mask asset with a mask-position offset. Figma's export pairs each shape with
 * a differently-cropped mask PNG (a 352px crop of a 2500px matcap) and the
 * offset does not land on the same pixels, which renders the raw grey matcap
 * beside the tinted copy. Masking by the source image guarantees alignment.
 *
 * Note: the image is sized `100%` rather than `auto`. On an absolutely
 * positioned replaced element, `width: auto` resolves to the *intrinsic* width
 * (2500px), which ignores the `inset` box entirely.
 */
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
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