import { useState, useEffect } from "react";
import { fetchSubTopics, SubTopic } from "../services/sharepointApi";

interface UseSubTopicsResult {
  subTopics: SubTopic[];
  loading: boolean;
  error: string | null;
}

export function useSubTopics(topicId: number): UseSubTopicsResult {
  const [subTopics, setSubTopics] = useState<SubTopic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchSubTopics(topicId)
      .then((data) => {
        if (!cancelled) {
          setSubTopics(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [topicId]);

  return { subTopics, loading, error };
}
