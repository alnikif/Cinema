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
};

/**
 * LIST
 */
// TODO: rename to RickAndMortyListResponseMetaType
export type RickAndMortyResponseMetaType = {
  count: number;
  next: string | null;
  pages: number | null;
  prev: unknown | null | string;
};

// TODO: rename to RickAndMortyListResponseType
export type RickAndMortyResponseType = {
  info: RickAndMortyResponseMetaType;
  results: RickAndMortyType[];
};