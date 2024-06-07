"use client";

import { useQuery } from "@tanstack/react-query";
import { useFetchFilm } from "@/hooks";
import Image from "next/image";
import imgSrc from "@/public/4.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

async function fetchFilm({ params }: { params: { id: string } }) {
  const response = await fetch(`https://swapi.dev/api/films/${params.id}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export default function Movie({ params }: { params: { id: string } }) {
  const router = useRouter();

  const { data: film, isPending, isError } = useFetchFilm(params.id);

  if (isError) return <p>Error</p>;

  if (isPending) return <p>Loading...</p>;

  return (
    <Container>
      <Image
        src="https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764098/dp45b3hyiicb3adi6avj.png"
        alt={film.title}
        placeholder="blur"
        blurDataURL="https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764098/dp45b3hyiicb3adi6avj.png"
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

      <Button variant="outlined" onClick={() => router.back()}>Outlined</Button>

      <h1>{film.title}</h1>
      <p>{film.opening_crawl}</p>
    </Container>
  );
}
