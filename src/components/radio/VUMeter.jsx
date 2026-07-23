import { useMemo } from "react";

export const VUMeter = () => {
  const bars = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        minH: 8 + Math.random() * 10,
        maxH: 28 + Math.random() * 34,
        dur: (0.4 + Math.random() * 0.8).toFixed(2),
        delay: (Math.random() * 0.5).toFixed(2),
        color: i / 31 > 0.85 ? "#c03020" : i / 31 > 0.65 ? "#c49a20" : "#8a6018",
      })),
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
