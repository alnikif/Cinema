import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { Table } from '../../components/Table/Table';
import { headerRickAndMortyRowConfig } from './rickAndMortyTableConfig';
import { RickAndMortyType } from '../../types/rickAndMortyTypes';
import { NotificationError } from '../../components/NotificationError/NotificationError';
import { RickAndMortyCards } from '../../components/Cards/RickAndMortyCards/RickAndMortyCards';
import Dropdown from '../../components/Dropdown/Dropdown';
import { PageViews, ViewContext, views } from '../../Providers/ViewProvider';
import styles from './RickAndMorty.module.scss';

export const RickAndMorty = () => {
  const [rickAndMortyData, setRickAndMortyData] = useState<RickAndMortyType[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const { view, setView } = useContext(ViewContext);

  const viewsOptions = views.map(({ key, title }) => ({
    id: key,
    label: title
  }));

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
      <div className={styles.dropdownContainer}>
        <Dropdown selectedOptionId={view} options={viewsOptions} onSelect={setView} />
      </div>

      {view === PageViews.card && <RickAndMortyCards title="Rick and Morty" data={rickAndMortyData} />}
      {view === PageViews.table && <Table title="Rick and Morty" data={rickAndMortyData} tableConfig={headerRickAndMortyRowConfig} />}

      <NotificationError title="Fetch Rick and Morty error notification" message={error?.message} />

      {loading && <div>Loading...</div>}
    </>
  );
};
