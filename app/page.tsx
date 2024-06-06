"use client";

import { useFetchFilms } from "@/hooks";
import FilmTable from "@/components/FilmTable";

export default function Home() {
  const { data: films, isPending, isError } = useFetchFilms();

  if (isError) return <p>Error</p>;

  if (isPending) return <p>Loading...</p>;

  return (
    <main>
      <FilmTable films={films} />
    </main>
  );
}
