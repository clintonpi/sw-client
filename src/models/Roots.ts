export interface Roots {
  isLoading: boolean;
  payload: {
    films: string;
    people: string;
    planets: string;
    species: string;
    starships: string;
    vehicles: string,
  } | null;
  error: Error | null,
}
