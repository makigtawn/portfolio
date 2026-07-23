const statusDot = {
  unread: "bg-primary",
  read: "bg-transparent",
  archived: "bg-transparent",
};

export const MessageList = ({ messages, selectedId, onSelect }) => {
  if (messages.length === 0) {
    return <p className="font-mono text-[12px] text-muted-foreground p-4">No messages.</p>;
  }

  return (
    <ul className="bg-card border border-border rounded-sm divide-y divide-border overflow-hidden">
      {messages.map((m) => (
        <li key={m._id}>
          <button
            onClick={() => onSelect(m)}
            className={`w-full text-left p-4 hover:bg-secondary transition-colors flex items-start gap-3 ${
              selectedId === m._id ? "bg-secondary" : ""
            }`}>
            <span
              className={`mt-1.5 h-2 w-2 rounded-full shrink-0 border border-primary ${statusDot[m.status]}`}
            />
            <span className="min-w-0 flex-1">
              <span className="flex items-center justify-between gap-2">
                <span className={`truncate font-serif ${m.status === "unread" ? "text-foreground" : "text-muted-foreground"}`}>
                  {m.name}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[.1em] text-muted-foreground shrink-0">
                  {m.category}
                </span>
              </span>
              <span className="block text-sm text-muted-foreground truncate">{m.message}</span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};
