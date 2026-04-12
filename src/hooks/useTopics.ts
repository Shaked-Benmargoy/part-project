import { useState, useEffect, useCallback } from "react";
import { fetchTopics, Topic } from "../services/sharepointApi";

interface UseTopicsResult {
  topics: Topic[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useTopics(): UseTopicsResult {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refetchKey, setRefetchKey] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchTopics()
      .then((data) => {
        if (!cancelled) {
          setTopics(data);
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
  }, [refetchKey]);

  const refetch = useCallback(() => setRefetchKey((k) => k + 1), []);

  return { topics, loading, error, refetch };
}
