"use client";

import { useFetchFilms } from "@/hooks";
import FilmTable from "@/components/FilmTable";
import Container from "@mui/material/Container";

export default function Home() {
  const { data: films, isPending, isError } = useFetchFilms();

  if (isError)
    return (
      <Container>
        <p>Error</p>
      </Container>
    );

  if (isPending)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );

  return (
    <Container>
      <FilmTable films={films} />
    </Container>
  );
}
