"use client";

import { useFetchPhotos, useFetchTopics } from "@/hooks";
import type { Topic } from "@/types";
import { Suspense, useEffect, useState } from "react";

export default function Gallery() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  return (
    <section className="container max-w-6xl mx-auto backdrop-blur-3xl bg-white/30 rounded-3xl p-8">
      <nav className="flex flex-col gap-2">
        <Suspense fallback={<div>Fetching topics...</div>}>
          <Topics onSelect={(topic: string) => setSelectedTopic(topic)} />
        </Suspense>
      </nav>
      <div className="flex flex-row gap-2">
        <Suspense fallback={<div>Fetching photos...</div>}>
          {selectedTopic && <Photos slug={selectedTopic} />}
        </Suspense>
      </div>
    </section>
  );
}

const Topics = ({ onSelect }: { onSelect: (topic: string) => void }) => {
  const { data, isPending, isError } = useFetchTopics();

  useEffect(() => {
    if (data && data.length > 0) {
      onSelect(data[0].slug); // Select the first topic by default
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div>
      {data.map((topic: any) => (
        <button
          key={topic.id}
          onClick={() => onSelect(topic.slug)}
          className="p-2 bg-blue-500 text-white rounded-lg"
        >
          {topic.title}
        </button>
      ))}
    </div>
  );
};

const Photos = ({ slug }: { slug: string }) => {
  const { data, isPending, isError } = useFetchPhotos(slug);

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((image: any) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.description || "Unsplash Image"}
            className="rounded-lg"
          />
        ))}
      </div>
    </>
  );
};
