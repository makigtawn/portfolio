import { useEffect, useMemo, useState } from "react";

const COLORS = {
  0: "#2a1e0a",
  1: "#6a3e10",
  2: "#d4a030",
  3: "#f0c060",
  4: "#fff4b0",
};
const DOW_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const CELL_COL_WIDTH = 13; // 10px cell + 3px gap

function LoadingState() {
  return (
    <div className="flex items-center justify-center h-28 gap-2">
      <span className="w-1.5 h-1.5 bg-amber-dim rounded-full animate-pulse" />
      <span
        className="w-1.5 h-1.5 bg-amber-dim rounded-full animate-pulse"
        style={{ animationDelay: "0.2s" }}
      />
      <span
        className="w-1.5 h-1.5 bg-amber-dim rounded-full animate-pulse"
        style={{ animationDelay: "0.4s" }}
      />
      <span className="font-mono text-[11px] lg:text-[12px] text-text-dim ml-2">
        Tuning into github.com/makigtawn
      </span>
    </div>
  );
}

function ErrorState() {
  return (
    <p className="font-mono text-[11px] lg:text-[12px] text-text-dim text-center py-10">
      Signal lost · Could not reach github.com/makigtawn
    </p>
  );
}

export const SignalActivity = () => {
  const [contributions, setContributions] = useState([]);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/makigtawn?y=last")
      .then((r) => r.json())
      .then((data) => {
        setContributions(data.contributions);
        setTotal(data.total.lastYear);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const weeks = useMemo(() => {
    const result = [];
    let week = [];
    contributions.forEach((day) => {
      week.push(day);
      if (week.length === 7) {
        result.push(week);
        week = [];
      }
    });
    if (week.length) result.push(week);
    return result;
  }, [contributions]);

  const monthLabels = useMemo(() => {
    const labels = [];
    weeks.forEach((week, wi) => {
      const firstDay = week[0];
      const month = new Date(firstDay.date).toLocaleString("default", {
        month: "short",
      });
      const prev = wi > 0 ? new Date(weeks[wi - 1][0].date).getMonth() : -1;
      const curr = new Date(firstDay.date).getMonth();
      if (curr !== prev) labels.push({ label: month, weekIndex: wi });
    });
    return labels;
  }, [weeks]);

  const showTooltip = (e, day) => {
    const rect = e.target.getBoundingClientRect();
    setTooltip({
      text:
        day.count === 0
          ? `No transmissions on ${day.date}`
          : `${day.count} transmission${day.count > 1 ? "s" : ""} on ${day.date}`,
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
  };

  return (
    <section id="github" className="max-w-4xl mx-auto px-8 py-24 relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-[11px] lg:text-[12px] text-amber-radio border border-amber-dim px-2 py-0.5 rounded-sm tracking-[.2em]">
          CH·04
        </span>
        <h2 className="font-serif text-2xl lg:text-3xl text-text-radio tracking-wide">
          Signal Activity
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border-radio to-transparent" />
      </div>

      <div className="bg-bg-radio-2 border border-border-radio rounded-sm p-8 relative">
        <span className="absolute -top-[9px] left-6 bg-bg-radio-2 px-2 font-mono text-[9px] tracking-[.18em] text-amber-radio">
          TRANSMISSION ACTIVITY · github.com/makigtawn
        </span>

        {loading && <LoadingState />}
        {error && <ErrorState />}

        {!loading && !error && (
          <>
            <div className="overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                <div className="flex flex-col mt-[18px]">
                  {DOW_LABELS.map((label, i) => (
                    <span
                      key={i}
                      className="h-[10px] mb-[3px] font-mono text-[8px] text-text-dim leading-none">
                      {label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-[6px]">
                  <div className="relative h-[12px]">
                    {monthLabels.map(({ label, weekIndex }) => (
                      <span
                        key={weekIndex}
                        className="absolute font-mono text-[9px] text-text-dim tracking-[.05em]"
                        style={{ left: weekIndex * CELL_COL_WIDTH }}>
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-[3px]">
                    {weeks.map((week, wi) => (
                      <div key={wi} className="flex flex-col gap-[3px]">
                        {week.map((day) => (
                          <div
                            key={day.date}
                            className="w-[10px] h-[10px] rounded-[2px] cursor-pointer transition-opacity duration-100 hover:opacity-70"
                            style={{ background: COLORS[day.level] }}
                            onMouseEnter={(e) => showTooltip(e, day)}
                            onMouseLeave={() => setTooltip(null)}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border-radio flex gap-8 flex-wrap items-center">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] tracking-[.15em] uppercase text-amber-dim">
                  Total last year
                </span>
                <span className="font-serif text-lg lg:text-xl text-amber-radio">
                  {total} contributions
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] tracking-[.15em] uppercase text-amber-dim">
                  Station
                </span>
                <span className="font-serif text-lg lg:text-xl text-text-radio">
                  <a
                    href="https://github.com/makigtawn"
                    className="text-amber-radio hover:text-amber-glow transition-colors">
                    github.com/makigtawn
                  </a>
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] tracking-[.15em] uppercase text-amber-dim">
                  Signal strength
                </span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className="flex flex-col items-center gap-1">
                      <span
                        className="w-3 h-3 rounded-sm inline-block"
                        style={{ background: COLORS[level] }}
                      />
                      {level === 0 && (
                        <span className="text-[8px] text-text-dim">None</span>
                      )}
                      {level === 4 && (
                        <span className="text-[8px] text-text-dim">Max</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {tooltip && (
          <div
            className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full bg-bg-radio-2 border border-border-radio rounded-sm px-2 py-1 font-mono text-[10px] text-text-radio whitespace-nowrap"
            style={{ left: tooltip.x, top: tooltip.y }}>
            {tooltip.text}
          </div>
        )}
      </div>
    </section>
  );
};
