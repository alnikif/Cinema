import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import { Table } from '../../components/Table/Table';
import { headerRickAndMortyRowConfig } from './tableConfig';
import { RickAndMortyType } from '../../types/rickAndMortyTypes';

export const RickAndMorty = () => {
  const [rickAndMortyData, setRickAndMortyData] = useState<RickAndMortyType[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((response) => {
        const listCharacters = response?.data?.results || [];
        setRickAndMortyData(listCharacters);
      })
      .catch((apiError: unknown) => {
        if (apiError instanceof Error) {
          setError(apiError);
        }
      });
  }, []);

  // TODO: do not forget about error and loading spinner

  return (
    <>
      <Table title="Rick and Morty" data={rickAndMortyData} tableConfig={headerRickAndMortyRowConfig} />
    </>
  );
};
