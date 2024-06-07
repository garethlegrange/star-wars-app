"use client";

import { useFetchTopics, useFetchTopic } from "@/hooks";
import Link from "@mui/material/Link";

export default function Gallery() {
  const { data: topics, isPending, isError } = useFetchTopics();
  const { mutate: fetchTopic } = useFetchTopic();

  if (isPending)
    return (
      <section className="container max-w-6xl mx-auto">Loading...</section>
    );

  if (isError)
    return <section className="container max-w-6xl mx-auto">Error</section>;

  return (
    <section className="container max-w-6xl mx-auto grid grid-cols-[300px_1fr] gap-4">
      {/* <pre>{JSON.stringify(topics, null, 2)}</pre> */}
      <nav className="flex flex-col gap-2">
        {topics.map((topic: any) => (
          <button
            type="button"
            onClick={() => fetchTopic(topic.slug)}
            key={topic.id}
          >
            {topic.title}
          </button>
        ))}
      </nav>
      <div>images goes here</div>
    </section>
  );
}
