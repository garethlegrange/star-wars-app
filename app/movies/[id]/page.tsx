"use client";

import { useQuery } from "@tanstack/react-query";
import { useFetchFilm, useFetchCharacters } from "@/hooks";
import Image from "next/image";
import imgSrc from "@/public/images/backgrounds/4.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import BackgroundImage from "@/components/BackgroundImage";

export default function Movie({ params }: { params: { id: string } }) {
  const router = useRouter();

  const { data: film, isPending, isError } = useFetchFilm(params.id);

  if (isError) return <p>Error</p>;

  if (isPending) return <p>Loading...</p>;

  return (
    <>
      <Container>
        <Image src={imgSrc} alt="logo" className="w-full h-auto rounded-3xl" />
      </Container>

      <Container
        maxWidth="md"
        className="bg-white relative rounded-3xl py-12 px-8 flex flex-col gap-4 -mt-32 drop-shadow-xl"
      >
        <Button
          variant="outlined"
          type="button"
          onClick={() => router.back()}
          className="rounded-full"
        >
          Back
        </Button>

        <Typography variant="h2" className="font-bold text-4xl">
          {film.title} ({new Date(film.release_date).getFullYear()})
        </Typography>

        <ul className="my-0">
          <li>Episode: {film.episode_id}</li>
          <li>Director: {film.director}</li>
          <li>Producer: {film.producer}</li>
        </ul>

        <Typography variant="body1" className="text-lg">
          {film.opening_crawl}
        </Typography>

        <Typography variant="h4" className="text-lg font-bold">
          Characters
        </Typography>

        <ul className="mt-0">
          {film.characters.map((character: any) => {
            const characterUrlParts = character.split("/").filter(Boolean);
            const characterId = characterUrlParts[characterUrlParts.length - 1];
            return <Character key={characterId} id={characterId} />;
          })}
        </ul>
      </Container>
    </>
  );
}

export const Character = ({ id }: { id: any }) => {
  const { data: character, isPending, isError } = useFetchCharacters(id);

  if (isError) return <p>Error</p>;

  if (isPending) return <p>Loading...</p>;

  return (
    <>
      <li>{character.name}</li>
    </>
  );
};
