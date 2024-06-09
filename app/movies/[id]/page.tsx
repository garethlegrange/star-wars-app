"use client";

import { useQuery } from "@tanstack/react-query";
import { useFetchFilm } from "@/hooks";
import Image from "next/image";
import imgSrc from "@/public/images/backgrounds/4.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import BackgroundImage from "@/components/BackgroundImage";

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
    <>
      {/* <Box
        sx={{
          backgroundColor: "black",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          minHeight: "100%",
          zIndex: -9999,
        }}
      >
        <Image
          src={imgSrc}
          alt="4"
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
      </Box>
      <Container>
        <Box>
          <Button variant="outlined" onClick={() => router.back()}>
            Outlined
          </Button>
          <h1>{film.title}</h1>
          <p>{film.opening_crawl}</p>
        </Box>
      </Container> */}
      <div className="relative min-h-dvh">
      <Image
          src={imgSrc}
          alt="4"
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
        <Container className="p-8 bg-white">
          <Box>
            <h1>
              {film.title}
            </h1>
            <p>Episode {film.episode_id}</p>
            <p>Release date {film.release_date}</p>
            <p>director{film.director}</p>
            <p>{film.opening_crawl}</p>
          </Box>
        </Container>
      </div>
    </>
  );
}
