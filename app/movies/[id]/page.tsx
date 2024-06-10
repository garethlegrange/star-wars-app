"use client";

import { useFetchFilm, useFetchCharacters } from "@/hooks";
import { useRouter } from "next/navigation";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BackgroundImage from "@/components/BackgroundImage";
import Link from "@mui/material/Link";
import MoviesLoader from "@/components/MoviesLoader";

export default function Movie({ params }: { params: { id: string } }) {
  const router = useRouter();

  const { data: film, isPending, isError } = useFetchFilm(params.id);

  if (isError) return <Container>Error</Container>;

  if (isPending) return <MoviesLoader />;

  return (
    <>
      <BackgroundImage title={film.title} episode_id={film.episode_id} />

      <Container
        maxWidth="md"
        className="bg-white relative rounded-3xl py-12 px-8 flex flex-col gap-4 -mt-32 drop-shadow-xl"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h2" className="font-bold text-4xl">
            {film.title} ({new Date(film.release_date).getFullYear()})
          </Typography>

          <Link
            role="button"
            onClick={() => router.back()}
            className="rounded-full cursor-pointer text-sm no-underline flex items-center text-slate-800 px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm10.25.75a.75.75 0 0 0 0-1.5H6.56l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L6.56 8.75h4.69Z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </Link>
        </Box>

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

        <Characters characters={film.characters} />
      </Container>
    </>
  );
}

const Characters = ({ characters }: { characters: any }) => {
  return (
    <ul className="mt-0">
      {characters.map((character: any) => {
        const characterUrlParts = character.split("/").filter(Boolean);
        const characterId = characterUrlParts[characterUrlParts.length - 1];
        return <Character key={characterId} id={characterId} />;
      })}
    </ul>
  );
};

export const Character = ({ id }: { id: any }) => {
  const { data: character } = useFetchCharacters(id);

  if (!character) return null;

  return (
    <>
      <li>{character.name}</li>
    </>
  );
};
