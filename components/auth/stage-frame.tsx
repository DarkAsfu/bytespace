/**
 * Responsive frame for the fixed 1440×1024 auth stages.
 *
 * Below `lg` the stacked mobile layout is shown instead. From `lg` the fixed
 * stage is centered and scaled about its centre so it stays pixel-proportional
 * without horizontal overflow:
 *   1024px -> 0.71 (1022px wide, ~2px slack)
 *   1280px -> 0.86 (1238px wide, ~42px slack)
 *   1366px -> 0.93 (1339px wide, ~27px slack)
 *   1440px -> 1.00 (exact)
 * The aspect-ratio wrapper keeps the height in sync with the visible size.
 */
export function StageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto aspect-[1440/1024] w-full max-w-[1440px] overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[1024px] w-[1440px] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.71] xl:scale-[0.86] min-[1366px]:scale-[0.93] min-[1440px]:scale-100">
        {children}
      </div>
    </div>
  );
}
