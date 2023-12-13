import React, { useContext, useEffect, useState, FC } from 'react';
import axios from 'axios';
import uniqBy from 'lodash/uniqBy';

import { Table } from '../../components/Table/Table';
import { PageViews, ViewContext, views } from '../../Providers/ViewProvider';
import { RickAndMortyType } from '../../types/rickAndMortyTypes';
import { NotificationError } from '../../components/NotificationError/NotificationError';
import { RickAndMortyCards } from '../../components/Cards/RickAndMortyCards/RickAndMortyCards';
import { headerRickAndMortyRowConfig } from './rickAndMortyTableConfig';
import InfiniteLoader from '../../components/InfiniteLoader/InfiniteLoader';
import usePagination from '../../hooks/usePagination';
import Dropdown from '../../components/Dropdown/Dropdown';
import styles from './RickAndMorty.module.scss';

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

type PaginationPropsType = {
  readonly pagesLength: number;
  readonly currentPage: number;
  readonly onSelectPage: (nextPage: number) => void;
};

const Pagination: FC<PaginationPropsType> = (props) => {
  const { pagesLength, currentPage, onSelectPage } = props;
  const lastPage = pagesLength;

  const pages = Array
      .from({ length: pagesLength }, (_, i) => i + 1)
      .filter(item => (
          item !== lastPage && item !== 1 && Math.abs(item - currentPage) <= 2
      ));

  return (
      <div style={{ display: 'flex' }}>
        <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => onSelectPage(1)}
        >
          1
        </button>
        {pages.map((pageNumber, i) => (
            <button
                type="button"
                key={String(pageNumber)}
                onClick={() => onSelectPage(Number(pageNumber))}
            >
              {pageNumber}
            </button>
        ))}
        <button
            type="button"
            disabled={currentPage === lastPage}
            onClick={() => onSelectPage(lastPage)}
        >
          {lastPage}
        </button>
      </div>
  );
}

export const RickAndMorty = () => {
  const [rickAndMortyData, setRickAndMortyData] = useState<RickAndMortyResponseType>(rickAndMortyInitialData);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const { meta, results } = rickAndMortyData;
  const hasNextPage = !!meta.next;

  const { view, setView } = useContext(ViewContext);

  const viewsOptions = views.map(({ key, title }) => ({
    id: key,
    label: title
  }));

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
  }, [params.page]);

  // TODO: need to implement some button for refresh
  const onRefresh = () => setPage(1);

  const onEndReached = () => {
    if (hasNextPage) {
      setPage(Number(params.page) + 1);
    }
  };

  return (
      <>
        <div className={styles.dropdownViewWrapper}>
          <Dropdown selectedOptionId={view} options={viewsOptions} onSelect={setView} />
        </div>
        <Pagination
          pagesLength={meta.pages || 0}
          currentPage={Number(params.page)}
          onSelectPage={(nextPage: number) => { if (!loading) setPage(nextPage); }}
        />
        {view === PageViews.card && <RickAndMortyCards title="Rick and Morty" data={results} />}
        {view === PageViews.table && <Table title="Rick and Morty" data={results} tableConfig={headerRickAndMortyRowConfig} />}

        <NotificationError title="Fetch Rick and Morty error notification" message={error?.message} />

        {loading && <div>Loading...</div>}

        {/* {!loading && <InfiniteLoader offset={150} onReached={onEndReached} />} */}
      </>
  );
};