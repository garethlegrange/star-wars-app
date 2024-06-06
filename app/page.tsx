"use client";

// import { getFilms } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

export async function getFilms() {
  const response = await fetch("https://swapi.dev/api/films/");

  console.log(response);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export default function Home() {
  const {
    data: films,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["films"],
    queryFn: getFilms,
  });

  if (isError) return <p>Error</p>;

  if (isPending) return <p>Loading...</p>;

  return (
    <main>
      <ul>
        {films?.results.map((film) => (
          <li key={film.episode_id}>{film.title}</li>
        ))}
      </ul>
    </main>
  );
}
