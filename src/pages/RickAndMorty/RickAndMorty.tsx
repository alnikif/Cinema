import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CellType } from '../../components/Table/CellType';

export type RickAndMortyType = {
  id: number;
  name: string;
  gender: string;
  image: string;
  location: { name: string; url: string };
  species: string;
  status: string;
  type: string;
};

const headerRickAndMortyRowConfig = [
  { key: 'id', label: 'Id', cellType: CellType.id, width: 1 },
  { key: 'name', label: 'Character name', cellType: CellType.name, width: 3 },
  { key: 'gender', label: 'Gender', cellType: CellType.gender, width: 2 },
  { key: 'image', label: 'Image', cellType: CellType.image, width: 2 },
  { key: 'species', label: 'Species', cellType: CellType.species, width: 2 },
  { key: 'location', label: 'Location', cellType: CellType.location, width: 2 },
  { key: 'status', label: 'Status', cellType: CellType.status, width: 2 },
  { key: 'type', label: 'Type', cellType: CellType.type, width: 2 }
];

export const RickAndMorty = () => {
  // eslint-disable-next-line react/hook-use-state
  const [rickAndMortyData, setRickAndMortyData] = useState<RickAndMortyType[]>([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`).then((response) => {
      const {
        data: { results: listCharacters }
      } = response;
      setRickAndMortyData(listCharacters);
    });
  }, []);
  console.log(rickAndMortyData);

  return <div>Rick and Morty</div>;
};
