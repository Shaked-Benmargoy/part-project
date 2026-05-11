import { useState } from "react";
import HomeView from "../components/landing/HomeView";
import TopicView from "../components/landing/TopicView";
import { useTopics } from "../hooks/useTopics";
import { Topic } from "../services/sharepointApi";
import { AdminProvider } from "../contexts/AdminContext";

const LandingPage = () => {
  const { topics, loading, error, refetch: refetchTopics } = useTopics();
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  return (
    <AdminProvider>
      {selectedTopic ? (
        <TopicView
          topicId={selectedTopic.Id}
          topicTitle={selectedTopic.Title}
          onBack={() => setSelectedTopic(null)}
          refetchTopics={refetchTopics}
        />
      ) : (
        <HomeView
          topics={topics}
          loading={loading}
          error={error}
          onOpenTopic={setSelectedTopic}
          refetchTopics={refetchTopics}
        />
      )}
    </AdminProvider>
  );
};

export default LandingPage;
