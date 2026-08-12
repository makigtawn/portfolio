import { useMemo } from "react";

export const VUMeter = () => {
  const bars = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => {
        const r1 = Math.abs(Math.sin((i + 1) * 12.9898));
        const r2 = Math.abs(Math.sin((i + 1) * 78.233));
        const r3 = Math.abs(Math.sin((i + 1) * 45.164));
        const r4 = Math.abs(Math.sin((i + 1) * 93.512));
        return {
          minH: 8 + (r1 % 1) * 10,
          maxH: 28 + (r2 % 1) * 34,
          dur: (0.4 + (r3 % 1) * 0.8).toFixed(2),
          delay: ((r4 % 1) * 0.5).toFixed(2),
          color: i / 31 > 0.85 ? "#c03020" : i / 31 > 0.65 ? "#c49a20" : "#8a6018",
        };
      }),
    [],
  );

  return (
    <div className="flex items-end gap-[3px] h-[60px]">
      {bars.map((bar, i) => (
        <div
          key={i}
          className="w-[5px] rounded-t-sm animate-vu"
          style={{
            "--vu-min": bar.minH + "px",
            "--vu-max": bar.maxH + "px",
            "--vu-dur": bar.dur + "s",
            animationDelay: bar.delay + "s",
            height: bar.minH + "px",
            background: bar.color,
          }}
        />
      ))}
    </div>
  );
};
