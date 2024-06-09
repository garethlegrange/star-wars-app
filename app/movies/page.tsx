"use client";

import { useFetchFilms } from "@/hooks";
import Container from "@mui/material/Container";
import FilmTable from "@/components/FilmTable";

export default function Movies() {
  const { data: films, isPending, isError } = useFetchFilms();

  if (isError) return <Container>Error</Container>;

  if (isPending) return <Container>Loading...</Container>;

  return (
    <Container>
      <FilmTable films={films} />
    </Container>
  );
}
