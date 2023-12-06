import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import uniqBy from 'lodash/uniqBy';

import { Table } from '../../components/Table/Table';
import { ViewContext } from '../../Providers/ViewProvider';
import { RickAndMortyType } from '../../types/rickAndMortyTypes';
import { NotificationError } from '../../components/NotificationError/NotificationError';
import { RickAndMortyCards } from '../../components/Cards/RickAndMortyCards/RickAndMortyCards';
import { headerRickAndMortyRowConfig } from './rickAndMortyTableConfig';
import InfiniteLoader from '../../components/InfiniteLoader/InfiniteLoader';
import usePagination from '../../hooks/usePagination';

type RickAndMortyResponseMetaType = {
  count: number;
  next: string | null;
  pages: number | null;
  prev: unknown | null | string;
};

type RickAndMortyResponseType = {
  meta: RickAndMortyResponseMetaType;
  results: RickAndMortyType[];
};

const rickAndMortyInitialData = {
  meta: {
    count: 0,
    next: null,
    pages: null,
    prev: null
  },
  results: []
};

export const RickAndMorty = () => {
  const { view } = useContext(ViewContext);

  const [rickAndMortyData, setRickAndMortyData] = useState<RickAndMortyResponseType>(rickAndMortyInitialData);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const { meta, results } = rickAndMortyData;
  const hasNextPage = !!meta.next;

  const [params, setPage] = usePagination(
      (page) => ({
        // TODO: query for search - you should extend it when you will add search
        page: String(page)
      }),
      []
  );

  useEffect(() => {
    setLoading(true);
    axios
        .get(`https://rickandmortyapi.com/api/character/?page=${params.page}`)
        .then((response) => {
          const { info: nextMeta, results: nextResults } = response?.data;
          setRickAndMortyData((prevRickAndMortyData) => ({
            meta: nextMeta,
            results: uniqBy([...prevRickAndMortyData.results, ...nextResults], 'id')
          }));
        })
        .catch((apiError: unknown) => {
          if (apiError instanceof Error) {
            setError(apiError);
          }
        })
        .finally(() => {
          setLoading(false);
        });
  }, [params]);

  // TODO: need to implement some button for refresh
  const onRefresh = () => setPage(1);

  const onEndReached = () => {
    if (hasNextPage) {
      setPage(Number(params.page) + 1);
    }
  };

  return (
      <>
        {view === 'card' ? (
            <RickAndMortyCards title="Rick and Morty" data={results} />
        ) : (
            <Table title="Rick and Morty" data={results} tableConfig={headerRickAndMortyRowConfig} />
        )}

        <NotificationError title="Fetch Rick and Morty error notification" message={error?.message} />

        {loading && <div>Loading...</div>}

        {!loading && <InfiniteLoader offset={150} onReached={onEndReached} />}
      </>
  );
};