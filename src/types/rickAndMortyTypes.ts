export type LocationType = {
  name: string;
  url: string;
};

/**
 * ITEM
 */
export type RickAndMortyType = {
  id: number;
  name: string;
  gender: string;
  image: string;
  location: LocationType;
  species: string;
  status: string;
  type: string;
  key: string;
};

/**
 * LIST
 */
export type RickAndMortyListResponseMetaType = {
  count: number;
  next: string | null;
  pages: number | null;
  prev: unknown | null | string;
};

export type RickAndMortyListResponseType = {
  info: RickAndMortyListResponseMetaType;
  results: RickAndMortyType[];
};