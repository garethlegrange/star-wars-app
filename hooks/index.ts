import { useQuery, useMutation } from "@tanstack/react-query";
import {
  fetchFilms,
  fetchFilm,
  fetchTopics,
  fetchTopic,
} from "@/server/actions";

// Star Wars API

export const useFetchFilms = () => {
  return useQuery({
    queryKey: ["fetch-all-films"],
    queryFn: () => fetchFilms(),
  });
};

export const useFetchFilm = (id: string) => {
  return useQuery({
    queryKey: ["fetch-film", id],
    queryFn: () => fetchFilm(id),
  });
};

// Unsplash API

export const useFetchTopics = () => {
  return useQuery({
    queryKey: ["fetch-topics"],
    queryFn: () => fetchTopics(),
  });
};

export const useFetchTopic = (slug: string) => {
  return useMutation({
    mutationFn: () => fetchTopic(slug),
  });
};
