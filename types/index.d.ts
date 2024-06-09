export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Films {
  count: number;
  next: string;
  previous: string;
  results: Film[];
}

export interface Topic {
  id: number;
  name: string;
}

