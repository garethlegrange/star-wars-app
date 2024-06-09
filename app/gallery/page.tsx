"use client";

import { useState, useEffect } from "react";
import { useStore } from "@/store";
import { useFetchTopics, useFetchPhotos } from "@/hooks";
import Image from "next/image";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import useEmblaCarousel from "embla-carousel-react";

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
  const { topic: selected, setTopic } = useStore();

  useEffect(() => {
    if (topics && topics.length > 0) {
      setTopic(topics[0].slug);
    }
  }, [topics, setTopic]);

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;

  return (
    <div className="sticky top-4 start-0 flex flex-col w-80 text-lg">
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
  );
};

const Images = () => {
  const { topic: slug } = useStore();
  const { data: images, isPending, isError } = useFetchPhotos(slug || "");
  const [isOpen, setIsOpen] = useState(false);

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  const handleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div className="columns-4 gap-4">
        {images.map((image: any) => (
          <div
            key={image.id}
            className="rounded-lg relative mb-4"
            onClick={handleOpen}
          >
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
      {isOpen ? (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} images={images} />
      ) : null}
    </>
  );
};

const Modal = ({
  isOpen,
  setIsOpen,
  images,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  images: any[];
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="space-y-4 border bg-white p-12">
            {/* <DialogTitle className="font-bold">Deactivate account</DialogTitle>
            <Description>
              This will permanently deactivate your account
            </Description> */}
            <Carousel images={images} />
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>x</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

const Carousel = ({ images }: { images: any[] }) => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });

  return (
    <div className="overflow-hidden w-96" ref={emblaRef}>
      <div className="flex">
        {images.map((image: any) => (
          <div key={image.id} className="min-w-0 flex-[0_0_100%]">
            <Image
              src={image.urls.small}
              blurDataURL={image.urls.small}
              placeholder="blur"
              alt={image.description || ""}
              width={250}
              height={250}
              className="rounded-3xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
