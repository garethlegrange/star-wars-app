import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchFilms,
  fetchFilm,
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



// export const useFetchTopic = (slug: string) => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: () => fetchTopic(slug),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["fetch-topics"] });
//     },
//   });
// };

// export const useFetchTopicPhotos = (slug: string) => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: () => fetchTopic(slug),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["fetch-topics"] });
//     },
//   });
// }