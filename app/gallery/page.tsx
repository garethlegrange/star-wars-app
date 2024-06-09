"use client";

import { useStore } from "@/store";
import { useFetchTopics, useFetchPhotos } from "@/hooks";

export default function Gallery() {
  return (
    <section className="container mx-auto backdrop-blur-3xl bg-white/30 rounded-3xl p-8 flex flex-row items-start gap-4">
      <Topics />
      <Images />
    </section>
  );
}

const Topics = () => {
  const { data: topics, isPending, isError } = useFetchTopics();
  const { setTopic } = useStore();

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;

  return (
    <div className="sticky top-4 start-0 flex flex-col min-w-80 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg *:w-full *:px-4 *:py-2 *:border-b *:border-gray-200">
      {topics.map((topic: any) => (
        <a role="button" key={topic.id} onClick={() => setTopic(topic.slug)}>
          {topic.title}
        </a>
      ))}
    </div>
  );
};

const Images = () => {
  const { topic: slug } = useStore();
  const { data: images, isPending, isError } = useFetchPhotos(slug || "");

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image: any) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.description || "Unsplash Image"}
          className="h-auto max-w-full rounded-lg"
        />
      ))}
    </div>
  );
};
