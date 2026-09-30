/**
 * Decorative radial glows — Figma spec (node 1:1695).
 * All blobs: `filter: blur(20px)`, circular via `border-radius` = size.
 * Positions are px from the section's top-left, verbatim from Figma.
 */
interface GlowBlob {
  id: string;
  size: number;
  rgb: string;
  stops: readonly [number, number, number, number];
  top: number;
  left: number;
}

const BLOBS: GlowBlob[] = [
  {
    id: "lime-strong-lg",
    size: 1137,
    rgb: "203, 252, 1",
    stops: [0.4, 0.09, 0.02, 0],
    top: -466,
    left: -152,
  },
  {
    id: "blue-subtle",
    size: 1137,
    rgb: "0, 59, 226",
    stops: [0.08, 0.02, 0, 0],
    top: -458,
    left: 811,
  },
  {
    id: "blue-medium",
    size: 1137,
    rgb: "0, 59, 226",
    stops: [0.16, 0.04, 0.01, 0],
    top: 183,
    left: -508,
  },
  {
    id: "lime-strong-sm",
    size: 672,
    rgb: "203, 252, 1",
    stops: [0.6, 0.14, 0.04, 0],
    top: 946,
    left: -287,
  },
  {
    id: "blue-strong",
    size: 1137,
    rgb: "0, 59, 226",
    stops: [0.24, 0.06, 0.01, 0],
    top: 788,
    left: 722,
  },
] as const;

function gradient(rgb: string, [a0, a1, a2]: readonly number[]) {
  return `radial-gradient(50% 50% at 50% 50%, rgba(${rgb}, ${a0}) 0%, rgba(${rgb}, ${a1}) 53%, rgba(${rgb}, ${a2}) 75%, rgba(${rgb}, 0) 100%)`;
}

export function GlowBlobs({
  items = BLOBS,
}: {
  /** Section-specific placement. Defaults to the WhyBytespace offsets. */
  items?: readonly GlowBlob[];
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((blob) => (
        <div
          key={blob.id}
          style={{
            position: "absolute",
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            borderRadius: blob.size,
            background: gradient(blob.rgb, blob.stops),
            filter: "blur(20px)",
          }}
        />
      ))}
    </div>
  );
}
