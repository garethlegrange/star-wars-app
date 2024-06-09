import { create } from "zustand";

type Store = {
  topic: string | null;
  setTopic: (topic: string) => void;
};

export const useStore = create<Store>()((set) => ({
  topic: null,
  setTopic: (topic: string) => set({ topic: topic }),
}));
