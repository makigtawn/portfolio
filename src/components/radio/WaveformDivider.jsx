const heights = [
  4, 8, 14, 20, 28, 36, 28, 20, 14, 8, 4, 8, 16, 24, 32, 24, 16, 8, 4, 10, 18, 26, 18, 10, 4,
];

export const WaveformDivider = () => {
  return (
    <div className="flex items-center justify-center gap-0.5 opacity-20 my-20">
      {heights.map((h, i) => (
        <span
          key={i}
          className="w-0.5 bg-amber-radio rounded-sm inline-block"
          style={{ height: h + "px" }}
        />
      ))}
    </div>
  );
};
