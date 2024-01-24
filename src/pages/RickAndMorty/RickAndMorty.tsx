import React, { useContext, useEffect, useState } from 'react';
import uniqBy from 'lodash/uniqBy';
import { Spin } from 'antd';

import { TableComponent } from '../../components/Table/TableComponent';
import { PageViews, ViewContext, views } from '../../Providers/ViewProvider';
import { RickAndMortyListResponseMetaType, RickAndMortyType } from '../../types/rickAndMortyTypes';
import { NotificationError } from '../../components/NotificationError/NotificationError';
import { RickAndMortyCards } from '../../components/Cards/RickAndMortyCards/RickAndMortyCards';
import { headerRickAndMortyRowConfig } from './rickAndMortyTableConfig';
import InfiniteLoader from '../../components/InfiniteLoader/InfiniteLoader';
import usePagination from '../../hooks/usePagination';
import DropdownComponent from '../../components/Dropdown/DropdownComponent';
import { Pagination } from '../../components/Pagination/Pagination';
import styles from './RickAndMorty.module.scss';
import { PaginationContext, paginations, PaginationTypes } from '../../Providers/PaginationProvider';
import { getRickAndMortyList } from '../../api/rickAndMorty';

type RickAndMortyResponseType = {
    meta: RickAndMortyListResponseMetaType;
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

    const { view, setView } = useContext(ViewContext);

    const viewsOptions = views.map(({ key, title }) => ({
        id: key,
        label: title
    }));

    const { pagination, setPagination } = useContext(PaginationContext);

    const paginationOptions = paginations.map(({ key, title }) => ({
        id: key,
        label: title
    }));

    const isInfinityPagination = pagination === PaginationTypes.infinity;

    const [params, setPage] = usePagination(
        (page) => ({
            page: String(page)
        }),
        []
    );

    useEffect(() => {
        setLoading(true);

        getRickAndMortyList(params.page)
            .then(({ info: nextMeta, results: responseResults }) => {
                setRickAndMortyData((prevRickAndMortyData) => {
                    const nextResults = isInfinityPagination ? uniqBy([...prevRickAndMortyData.results, ...responseResults], 'id') : responseResults;
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
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });
                }
            });
    }, [isInfinityPagination, params.page]);

    const onRefresh = () => setPage(1);

    const onEndReached = () => {
        if (hasNextPage) {
            setPage(Number(params.page) + 1);
        }
    };

    const onSelectPage = (nextPage: number) => {
        if (!loading) setPage(nextPage);
    };

    return (
        <div ref={setPageRef}>
            <div className={styles.dropdownWrapper}>
                <div>
                    <DropdownComponent selectedOptionId={view} options={viewsOptions} onSelect={setView} />
                </div>
                <div>
                    <DropdownComponent selectedOptionId={pagination} options={paginationOptions} onSelect={setPagination} />
                </div>
            </div>

            {view === PageViews.card && <RickAndMortyCards title="Rick and Morty" data={results} />}
            {view === PageViews.table && <TableComponent title="Rick and Morty" data={results} tableConfig={headerRickAndMortyRowConfig} />}

            {pagination === PaginationTypes.infinity && !loading && <InfiniteLoader offset={150} onReached={onEndReached} />}
            {pagination === PaginationTypes.manual && (
                <Pagination loading={loading} pagesLength={meta.pages || 0} currentPage={Number(params.page)} onSelectPage={onSelectPage} />
            )}

            <NotificationError title="Fetch Rick and Morty error notification" message={error?.message} />

            {loading && <div><Spin /></div>}
        </div>
    );
};