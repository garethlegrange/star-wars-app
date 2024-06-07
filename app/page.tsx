"use client";

import { useFetchFilms } from "@/hooks";
import FilmTable from "@/components/FilmTable";
import { Suspense } from "react";

export default function Home() {
  const { data: films, isPending, isError } = useFetchFilms();

  if (isError) return <p>Error</p>;

  if (isPending) return <p>Loading...</p>;

  return (
    <main>
      <Suspense fallback={<p>Suspense...</p>}>
        <FilmTable films={films} />
      </Suspense>
    </main>
  );
}
