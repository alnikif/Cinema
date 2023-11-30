import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CellType } from '../../components/Table/CellType';
import { Table } from '../../components/Table/Table';
import { BodyRowType } from '../../components/Table/BodyRows/BodyRows';

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
  { key: 'id', label: 'View character', cellType: CellType.link, width: 3 },
  { key: 'name', label: 'Character name', cellType: CellType.name, width: 4 },
  { key: 'gender', label: 'Gender', cellType: CellType.gender, width: 2 },
  { key: 'image', label: 'Image', cellType: CellType.image, width: 1 },
  { key: 'species', label: 'Species', cellType: CellType.species, width: 2 },
  { key: 'location', label: 'Location', cellType: CellType.location, width: 2 },
  { key: 'status', label: 'Status', cellType: CellType.status, width: 2 },
  { key: 'type', label: 'Type', cellType: CellType.type, width: 1 }
];

export const RickAndMorty = () => {
  const [rickAndMortyData, setRickAndMortyData] = useState<RickAndMortyType[]>([]);

  const [error, setError] = useState<Error | null>(null);

  const bodyRowsConfig = rickAndMortyData.reduce((acc, character) => {
    const { id, name, gender, image, species, location, status, type } = character;

    const bodyRickAndMortyRowCells = [
      { key: `${id}/link`, columnKey: 'View character', cellType: CellType.link, value: `/rick-and-morty/${id}`, label: `/rick-and-morty/${id}` },
      { key: `${id}/name`, columnKey: 'name', cellType: CellType.name, value: name },
      { key: `${id}/gender`, columnKey: 'gender', cellType: CellType.gender, value: gender },
      { key: `${id}/image`, columnKey: 'image', cellType: CellType.image, value: image },
      { key: `${id}/species`, columnKey: 'species', cellType: CellType.species, value: species },
      { key: `${id}/location`, columnKey: 'location', cellType: CellType.location, value: location },
      { key: `${id}/status`, columnKey: 'status', cellType: CellType.status, value: status },
      { key: `${id}/type`, columnKey: 'type', cellType: CellType.type, value: type }
    ];

    const bodyRow = { key: id.toString(), cells: bodyRickAndMortyRowCells };

    return [...acc, bodyRow];
  }, [] as BodyRowType[]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((response) => {
        const {
          data: { results: listCharacters }
        } = response;
        setRickAndMortyData(listCharacters);
      })
      .catch((apiError: unknown) => {
        if (apiError instanceof Error) {
          setError(apiError);
        }
      });
  }, []);
  console.log(rickAndMortyData);

  return (
    <>
      <Table title="Rick and Morty" headerRow={headerRickAndMortyRowConfig} bodyRows={bodyRowsConfig} />
    </>
  );
};
