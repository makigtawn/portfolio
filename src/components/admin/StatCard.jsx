export const StatCard = ({ label, value }) => {
  return (
    <div className="glass p-6">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
    </div>
  );
};
