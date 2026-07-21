import { Button } from "@/components/Button";

export const MessageDetail = ({ message, onStatusChange, onDelete }) => {
  if (!message) {
    return (
      <div className="glass p-8 text-center text-muted-foreground">
        Select a message to view it.
      </div>
    );
  }

  return (
    <div className="glass p-6 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">{message.name}</h2>
          <a href={`mailto:${message.email}`} className="text-sm text-primary hover:underline">
            {message.email}
          </a>
        </div>
        <span className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
          {message.category}
        </span>
      </div>

      <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.message}</p>

      <p className="text-xs text-muted-foreground">
        {new Date(message.createdAt).toLocaleString()}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {message.status !== "read" && (
          <Button size="sm" variant="ghost" onClick={() => onStatusChange(message, "read")}>
            Mark read
          </Button>
        )}
        {message.status !== "unread" && (
          <Button size="sm" variant="ghost" onClick={() => onStatusChange(message, "unread")}>
            Mark unread
          </Button>
        )}
        {message.status !== "archived" && (
          <Button size="sm" variant="ghost" onClick={() => onStatusChange(message, "archived")}>
            Archive
          </Button>
        )}
        <Button size="sm" variant="destructive" onClick={() => onDelete(message)}>
          Delete
        </Button>
      </div>
    </div>
  );
};
