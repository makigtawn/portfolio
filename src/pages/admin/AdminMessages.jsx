import { useEffect, useState } from "react";
import { apiGet, apiPatch, apiDelete } from "@/lib/api";
import { MessageList } from "@/components/admin/MessageList";
import { MessageDetail } from "@/components/admin/MessageDetail";

const filters = ["all", "unread", "read", "archived"];

export const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");

  const load = () => {
    const query = filter === "all" ? "" : `?status=${filter}`;
    apiGet(`/api/contact${query}`)
      .then((data) => setMessages(data.messages))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(load, [filter]);

  const handleSelect = async (message) => {
    setSelected(message);
    if (message.status === "unread") {
      await handleStatusChange(message, "read", { silent: true });
    }
  };

  const handleStatusChange = async (message, status, { silent } = {}) => {
    try {
      const { message: updated } = await apiPatch(`/api/contact/${message._id}`, { status });
      setMessages((prev) => prev.map((m) => (m._id === updated._id ? updated : m)));
      setSelected(updated);
      if (!silent) load();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (message) => {
    if (!confirm(`Delete message from ${message.name}?`)) return;
    try {
      await apiDelete(`/api/contact/${message._id}`);
      setSelected(null);
      load();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Messages</h1>
        <div className="flex gap-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-sm capitalize transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-surface"
              }`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <MessageList messages={messages} selectedId={selected?._id} onSelect={handleSelect} />
          <MessageDetail
            message={selected}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
};
