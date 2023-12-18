export type LocationType = {
  name: string;
  url: string;
};

export type RickAndMortyType = {
  id: number;
  name: string;
  gender: string;
  image: string;
  location: LocationType;
  species: string;
  status: string;
  type: string;
};
