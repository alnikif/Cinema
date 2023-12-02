import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import { Table } from '../../components/Table/Table';
import { headerRickAndMortyRowConfig } from './tableConfig';
import { RickAndMortyType } from '../../types/rickAndMortyTypes';
import { NotificationError } from '../../components/NotificationError/NotificationError';

export const RickAndMorty = () => {
  const [rickAndMortyData, setRickAndMortyData] = useState<RickAndMortyType[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <NotificationError title="Fetch Rick and Morty error notification" message={error?.message} />
      <Table title="Rick and Morty" data={rickAndMortyData} tableConfig={headerRickAndMortyRowConfig} />
      {loading && <div>Loading...</div>}
    </>
  );
};
