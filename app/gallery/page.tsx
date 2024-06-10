"use client";

import { useEffect } from "react";
import { useStore } from "@/store";
import { useFetchTopics, useFetchPhotos } from "@/hooks";
import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <section className="container mx-auto backdrop-blur-3xl bg-white/30 rounded-3xl p-8 md:flex flex-row items-start gap-4">
        <Topics />
        <Images />
      </section>
    </>
  );
}

const Topics = () => {
  const { data: topics, isPending, isError } = useFetchTopics();
  const { topic: selected, setTopic } = useStore();

  useEffect(() => {
    if (topics && topics.length > 0) {
      setTopic(topics[0].slug);
    }
  }, [topics, setTopic]);

  if (isPending) {
    return (
      <div className="md:sticky md:top-4 md:start-0 flex md:flex-col md:w-80 text-lg mb-4 md:mb-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse h-7 bg-indigo-500 mb-2"
          ></div>
        ))}
      </div>
    );
  }

  if (isError)
    return (
      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">Error:</span> There was an error fetching
        your topics
      </div>
    );

  return (
    <div className="sticky top-4 start-0">
      <div className="hidden md:flex flex-col w-80 text-lg">
        {topics.map((topic: any) => (
          <a
            role="button"
            key={topic.id}
            onClick={() => setTopic(topic.slug)}
            className={`cursor-pointer ${
              topic.slug === selected && "text-indigo-700 font-bold"
            }`}
          >
            {topic.title}
          </a>
        ))}
      </div>
      <div className="md:hidden block w-full text-lg sticky top-4 start-0 backdrop-blur-3xl bg-white/30 rounded-3xl p-4 mb-4">
        <select
          title="Select your topic"
          value={selected || ""}
          onChange={(e) => setTopic(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {topics.map((topic: any) => (
            <option key={topic.id} value={topic.slug}>
              {topic.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const Images = () => {
  const { topic: slug } = useStore();
  const { data: images, isPending, isError } = useFetchPhotos(slug || "");

  if (isPending) {
    return (
      <div className="sm:columns-2 md:columns-3 gap-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="rounded-lg relative mb-4 animate-pulse">
            <div className="bg-indigo-500 rounded-3xl w-full md:min-w-[280px] lg:min-w-96 h-48"></div>
          </div>
        ))}
      </div>
    );
  }

  if (isError)
    return (
      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">Error:</span> There was an error fetching
        your images
      </div>
    );

  return (
    <>
      <div className="sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((image: any) => (
          <div key={image.id} className="rounded-lg mb-4">
            <Image
              src={image.urls.small}
              blurDataURL={image.urls.small}
              placeholder="blur"
              alt={image.description || ""}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};
