import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

let contentPromise = null;

function fetchContentOnce() {
  if (!contentPromise) {
    contentPromise = apiGet("/api/content")
      .then((data) => data.content)
      .catch(() => null);
  }
  return contentPromise;
}

export function useSiteContent() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchContentOnce().then((data) => {
      if (!cancelled) {
        setContent(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return { content, loading };
}

export function invalidateSiteContent() {
  contentPromise = null;
}
