import { useState, useEffect, useCallback } from "react";
import { fetchSubTopics, SubTopic } from "../services/sharepointApi";

interface UseSubTopicsResult {
  subTopics: SubTopic[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useSubTopics(topicId: number): UseSubTopicsResult {
  const [subTopics, setSubTopics] = useState<SubTopic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refetchKey, setRefetchKey] = useState(0);

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
  }, [topicId, refetchKey]);

  const refetch = useCallback(() => setRefetchKey((k) => k + 1), []);

  return { subTopics, loading, error, refetch };
}
