"use client";

import { useFetchFilms } from "@/hooks";
import Container from "@mui/material/Container";
import FilmTable from "@/components/FilmTable";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Typography } from "@mui/material";
import MoviesLoader from "@/components/MoviesLoader";

export default function Movies() {
  const { data: films, isPending, isError } = useFetchFilms();

  if (isError) return <Container>Error</Container>;

  if (isPending) return <MoviesLoader />;

  return (
    <>
      <Container>
        <Image src={logo} alt="logo" className="w-full h-auto rounded-3xl" />
      </Container>

      <Container
        maxWidth="md"
        className="bg-white relative rounded-3xl py-12 px-8 flex flex-col gap-4 -mt-32 drop-shadow-xl"
      >
        <Typography variant="h2" className="font-bold text-4xl">
          Welcome to the ultimate Star Wars movie database!
        </Typography>
        <Typography variant="body1" className="text-xl mb-8">
          Explore the rich and expansive universe of Star Wars through detailed
          information about each movie in the saga. Click on any movie title to
          dive deeper into its characters, plot, trivia, and much more.
        </Typography>
        <FilmTable films={films} />
      </Container>
    </>
  );
}
