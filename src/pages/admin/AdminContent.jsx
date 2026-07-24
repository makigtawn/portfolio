import { useEffect, useState } from "react";
import { apiGet, apiPut } from "@/lib/api";
import { invalidateSiteContent } from "@/hooks/useSiteContent";
import { HeroContentForm } from "@/components/admin/HeroContentForm";
import { AboutContentForm } from "@/components/admin/AboutContentForm";

export const AdminContent = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState("");

  useEffect(() => {
    apiGet("/api/content")
      .then((data) => setContent(data.content))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const save = async (path, body, label) => {
    setSubmitting(true);
    setError("");
    setSaved("");
    try {
      const data = await apiPut(`/api/content/${path}`, body);
      setContent(data.content);
      invalidateSiteContent();
      setSaved(label);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const header = (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-primary border border-amber-dim px-2 py-0.5 rounded-sm tracking-[.2em]">
        CH·03
      </span>
      <h1 className="font-serif text-2xl text-foreground tracking-wide">
        Content
      </h1>
    </div>
  );

  if (loading)
    return (
      <p className="font-mono text-xs text-muted-foreground">Loading...</p>
    );

  if (!content) {
    return (
      <div className="space-y-6 max-w-2xl">
        {header}
        <p className="text-sm text-danger">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">
      {header}

      {error && <p className="text-sm text-danger">{error}</p>}
      {saved && <p className="text-sm text-signal-green">{saved} saved.</p>}

      <HeroContentForm
        hero={content.hero}
        submitting={submitting}
        onSubmit={(form) => save("hero", form, "Hero")}
      />
      <AboutContentForm
        about={content.about}
        submitting={submitting}
        onSubmit={(form) => save("about", form, "About")}
      />
    </div>
  );
};
