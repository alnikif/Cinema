import React, { useContext, useEffect, useState, FC, useRef } from 'react';
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
import { Pagination } from '../../components/Pagination/Pagination';
import styles from './RickAndMorty.module.scss';

// TODO: move to PaginationProvider
export enum PaginationType {
    infinity = 'infinity',
    manual = 'manual'
}
// TODO: move to PaginationProvider
// eslint-disable-next-line prefer-const
let paginationType: PaginationType = PaginationType.manual;

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
    const [pageRef, setPageRef] = useState<HTMLDivElement | null>(null);
    const [rickAndMortyData, setRickAndMortyData] = useState<RickAndMortyResponseType>(rickAndMortyInitialData);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(false);

    const { meta, results } = rickAndMortyData;
    const hasNextPage = !!meta.next;
    const isInfinityPagination = paginationType === PaginationType.infinity;

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
                const { info: nextMeta, results: responseResults } = response?.data;
                setRickAndMortyData((prevRickAndMortyData) => {
                    const nextResults = isInfinityPagination
                        ? uniqBy([...prevRickAndMortyData.results, ...responseResults], 'id')
                        : responseResults;
                    return { meta: nextMeta, results: nextResults };
                });
            })
            .catch((apiError: unknown) => {
                if (apiError instanceof Error) {
                    setError(apiError);
                }
            })
            .finally(() => {
                setLoading(false);
                if (!isInfinityPagination) {
                    pageRef?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                    });
                }
            });
    }, [isInfinityPagination, params.page]);

    // TODO: need to implement some button for refresh
    const onRefresh = () => setPage(1);

    const onEndReached = () => {
        if (hasNextPage) {
            setPage(Number(params.page) + 1);
        }
    };

    const onSelectPage = (nextPage: number) => {
        if (!loading) setPage(nextPage);
    }

    return (
        <div ref={setPageRef}>
            <div className={styles.dropdownViewWrapper}>
                <Dropdown selectedOptionId={view} options={viewsOptions} onSelect={setView} />
            </div>

            {view === PageViews.card && <RickAndMortyCards title="Rick and Morty" data={results} />}
            {view === PageViews.table && <Table title="Rick and Morty" data={results} tableConfig={headerRickAndMortyRowConfig} />}

            {paginationType === PaginationType.infinity && !loading && <InfiniteLoader offset={150} onReached={onEndReached} />}
            {paginationType === PaginationType.manual && (
                <Pagination
                    loading={loading}
                    pagesLength={meta.pages || 0}
                    currentPage={Number(params.page)}
                    onSelectPage={onSelectPage}
                />
            )}

            <NotificationError title="Fetch Rick and Morty error notification" message={error?.message} />

            {loading && <div>Loading...</div>}

            {/* {!loading && <InfiniteLoader offset={150} onReached={onEndReached} />} */}
        </div>
    );
};