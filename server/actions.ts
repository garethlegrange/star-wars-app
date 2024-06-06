"use server";

export const fetchFilms = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/films/");
    return response.json();
  } catch (error) {
    throw new Error("Network response was not ok");
  }
};

export const fetchFilm = async (id: string) => {
  try {
    const response = await fetch(`https://swapi.dev/api/films/${id}/`);
    return response.json();
  } catch (error) {
    throw new Error("Network response was not ok");
  }
};
