import { useState } from "react";
import HomeView from "../components/landing/HomeView";
import TopicView from "../components/landing/TopicView";
import { useTopics } from "../hooks/useTopics";
import { Topic } from "../services/sharepointApi";

const LandingPage = () => {
  const { topics, loading, error } = useTopics();
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  if (selectedTopic) {
    return (
      <TopicView
        topicId={selectedTopic.Id}
        topicTitle={selectedTopic.Title}
        onBack={() => setSelectedTopic(null)}
      />
    );
  }

  return (
    <HomeView
      topics={topics}
      loading={loading}
      error={error}
      onOpenTopic={setSelectedTopic}
    />
  );
};

export default LandingPage;
