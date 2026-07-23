export const StatCard = ({ label, value }) => {
  return (
    <div className="bg-card border border-border rounded-sm p-6">
      <p className="font-serif text-2xl text-highlight">{value}</p>
      <p className="font-mono text-xs uppercase tracking-[.15em] text-muted-foreground mt-1">
        {label}
      </p>
    </div>
  );
};
