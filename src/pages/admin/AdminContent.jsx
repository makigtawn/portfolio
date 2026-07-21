import { useEffect, useState } from "react";
import { apiGet, apiPut } from "@/lib/api";
import { invalidateSiteContent } from "@/hooks/useSiteContent";
import { HeroContentForm } from "@/components/admin/HeroContentForm";
import { AboutContentForm } from "@/components/admin/AboutContentForm";
import { SkillsContentForm } from "@/components/admin/SkillsContentForm";

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

  if (loading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold">Content</h1>

      {error && <p className="text-sm text-red-500">{error}</p>}
      {saved && <p className="text-sm text-green-600">{saved} saved.</p>}

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
      <SkillsContentForm
        skills={content.skills}
        submitting={submitting}
        onSubmit={(skills) => save("skills", { skills }, "Skills")}
      />
    </div>
  );
};
