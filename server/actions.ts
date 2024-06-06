"use server";

export async function getFilms() {
  const response = await fetch("https://swapi.dev/api/films/");

  console.log(response);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export async function getFilm(id: number) {
  const response = await fetch(`https://swapi.dev/api/films/${id}/`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
