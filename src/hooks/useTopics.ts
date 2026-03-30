import { useState, useEffect } from "react";
import { fetchTopics, Topic } from "../services/sharepointApi";

interface UseTopicsResult {
  topics: Topic[];
  loading: boolean;
  error: string | null;
}

export function useTopics(): UseTopicsResult {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
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
  }, []);

  return { topics, loading, error };
}
