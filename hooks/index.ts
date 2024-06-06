import { useQuery } from "@tanstack/react-query";
import { fetchFilms, fetchFilm } from "@/server/actions";

export const useFetchFilms = () => {
  return useQuery({
    queryKey: ["films"],
    queryFn: () => fetchFilms(),
  });
};

export const useFetchFilm = (id: string) => {
  return useQuery({
    queryKey: ["film", id],
    queryFn: () => fetchFilm(id),
  });
};

