import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import { Table } from '../../components/Table/Table';
import { headerRickAndMortyRowConfig } from './tableConfig';
import { RickAndMortyType } from '../../types/rickAndMortyTypes';
import { NotificationError } from '../../components/NotificationError/NotificationError';
import { Cards } from '../../components/Cards/Cards';
import Dropdown from '../../components/Dropdown/Dropdown';
import styles from './RickAndMorty.module.scss'

export enum PageView {
  table = 'table',
  card = 'card'
}

export const views = [
  { key: PageView.card, title: 'Card view' },
  { key: PageView.table, title: 'Table view' }
];

export const DEFAULT_VIEW = PageView.card;

export type ViewType = {
  view: PageView;
  setView: (nextView: PageView) => void;
};

const defaultView = {
  view: DEFAULT_VIEW,
  setView: () => {
    //
  },
};



export const RickAndMorty = () => {
  const [rickAndMortyData, setRickAndMortyData] = useState<RickAndMortyType[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const [view, setView] = useState<PageView>(defaultView.view);

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

      {view === 'card' ?
        <Cards title="Rick and Morty" data={rickAndMortyData} /> :
        <Table title="Rick and Morty" data={rickAndMortyData} tableConfig={headerRickAndMortyRowConfig} />
      }

      <NotificationError title="Fetch Rick and Morty error notification" message={error?.message} />

      {loading && <div>Loading...</div>}
    </>
  );
};
