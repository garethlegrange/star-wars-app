import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchFilms,
  fetchFilm,
  fetchCharacters,
  fetchTopics,
  fetchPhotos,
} from "@/server/actions";

// Star Wars API

export const useFetchFilms = () => {
  return useQuery({
    queryKey: ["fetch-all-films"],
    queryFn: () => fetchFilms(),
    refetchOnWindowFocus: false,
  });
};

export const useFetchFilm = (id: string) => {
  return useQuery({
    queryKey: ["fetch-film", id],
    queryFn: () => fetchFilm(id),
  });
};

export const useFetchCharacters = (id: string) => {
  return useQuery({
    queryKey: ["fetch-characters", id],
    queryFn: () => fetchCharacters(id),
  });
};

// Unsplash API

export const useFetchTopics = () => {
  return useQuery({
    queryKey: ["fetch-topics"],
    queryFn: () => fetchTopics(),
  });
};

export const useFetchPhotos = (slug: string) => {
  return useQuery({
    queryKey: ["fetch-photos", slug],
    queryFn: () => fetchPhotos(slug),
    enabled: !!slug,
  });
};
