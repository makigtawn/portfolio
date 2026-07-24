import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const formatHour = (iso) =>
  new Date(iso).toLocaleTimeString([], { hour: "numeric" });

const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-sm px-3 py-2 font-mono text-xs">
      <p className="text-muted-foreground">{formatHour(label)}</p>
      <p className="text-primary">{payload[0].value} views</p>
    </div>
  );
};

export const AnalyticsChart = ({ buckets }) => {
  return (
    <div className="bg-card border border-border rounded-sm p-6">
      <p className="font-mono text-xs uppercase tracking-[.15em] text-muted-foreground mb-4">
        Page views · last 24h
      </p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={buckets}>
            <defs>
              <linearGradient id="pageviewFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="time"
              tickFormatter={formatHour}
              stroke="var(--color-text-dim)"
              fontSize={11}
              tickLine={false}
            />
            <YAxis allowDecimals={false} stroke="var(--color-text-dim)" fontSize={11} tickLine={false} width={30} />
            <Tooltip content={<ChartTooltip />} />
            <Area
              type="monotone"
              dataKey="count"
              stroke="var(--color-primary)"
              strokeWidth={2}
              fill="url(#pageviewFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
