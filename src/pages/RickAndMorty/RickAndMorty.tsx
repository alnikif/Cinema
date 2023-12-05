import React, { useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import { Table } from '../../components/Table/Table';
import { headerRickAndMortyRowConfig } from './rickAndMortyTableConfig';
import { RickAndMortyType } from '../../types/rickAndMortyTypes';
import { NotificationError } from '../../components/NotificationError/NotificationError';
import { RickAndMortyCards } from '../../components/Cards/RickAndMortyCards/RickAndMortyCards';
import Dropdown from '../../components/Dropdown/Dropdown';
import styles from './RickAndMorty.module.scss'
import { ViewContext, views } from '../../Providers/ViewProvider';
import { ThemeContext } from '../../Providers/ThemeProvider';

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

  const {view} = useContext(ViewContext)

  return (
    <>


      {view === 'card' ?
        <RickAndMortyCards title="Rick and Morty" data={rickAndMortyData} /> :
        <Table title="Rick and Morty" data={rickAndMortyData} tableConfig={headerRickAndMortyRowConfig} />
      }

      <NotificationError title="Fetch Rick and Morty error notification" message={error?.message} />

      {loading && <div>Loading...</div>}
    </>
  );
};
