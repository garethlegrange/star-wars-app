"use server";

// Star Wars API

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

// Unsplash API

export const fetchTopics = async () => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/topics?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );
    return response.json();
  } catch (error) {
    throw new Error("Network response was not ok");
  }
};

export const fetchTopic = async (slug: string) => {
  // https://api.unsplash.com/topics/pastels/photos?client_id=SC4OdHkDLVwl-3soEmDkQR5yeII9eO5BraiLvZNiF-8
  try {
    const response = await fetch(
      `https://api.unsplash.com/topics/${slug}/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );
    return response.json();
  } catch (error) {
    throw new Error("Network response was not ok");
  }
};

