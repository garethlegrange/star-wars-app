"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Film } from "@/types";
import { useFetchFilms } from "@/hooks";
// import FilmTable from "@/components/FilmTable";

// async function fetchFilms() {
//   const response = await fetch("https://swapi.dev/api/films/");

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   return response.json();
// }

export default function Home() {
  const { data: films, isPending, isError } = useFetchFilms();

  if (isError) return <p>Error</p>;

  if (isPending) return <p>Loading...</p>;

  return (
    <main>
      {/* <ul>
        {films?.results.map((film: Film) => {
          const match = film.url.match(/\/(\d+)\/$/);
          const id: string = match ? match[1] : "no_movie";
          return (
            <li key={film.episode_id}>
              <h2>{film.title}</h2>
              <Link href={`/movie/${id}`}>{film.title}</Link>
            </li>
          );
        })}
      </ul> */}

      <pre>{JSON.stringify(films, null, 2)}</pre>
    </main>
  );
}
