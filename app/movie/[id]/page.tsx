"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import imgSrc from "@/public/4.png";

async function fetchFilm({ params }: { params: { id: string } }) {
  const response = await fetch(`https://swapi.dev/api/films/${params.id}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export default function Movie({ params }: { params: { id: string } }) {
  const {
    data: film,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["film", params.id],
    queryFn: () => fetchFilm({ params }),
  });

  if (isError) return <p>Error</p>;

  if (isPending) return <p>Loading...</p>;

  return (
    <>
      <Image
        src={imgSrc}
        alt={film.title}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <h1>{film.title}</h1>
      <p>{film.opening_crawl}</p>
    </>
  );
}
