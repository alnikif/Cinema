import React, { useContext } from 'react';
import { Spin, Table } from 'antd';
import { PageViews, ViewContext } from '../../Providers/ViewProvider';
import { NotificationError } from '../../components/NotificationError/NotificationError';
import { RickAndMortyCards } from '../../components/Cards/RickAndMortyCards/RickAndMortyCards';
import InfiniteLoader from '../../components/InfiniteLoader/InfiniteLoader';
import usePagination from '../../hooks/usePagination';
import { PaginationComponent } from '../../components/Pagination/PaginationComponent';
import { PaginationContext, PaginationTypes } from '../../Providers/PaginationProvider';
import useRickAndMortyData from './useRickAndMortyData';
import rickAndMortyColumns from '../../constants/rickAndMortyColumns';
import PaginationDropdown from '../../components/Dropdowns/PaginationDropdown/PaginationDropdown';
import ViewDropdown from '../../components/Dropdowns/ViewDropdown/ViewDropdown';

import styles from './RickAndMorty.module.scss';

export const RickAndMorty = () => {
    const { view } = useContext(ViewContext);
    const { pagination } = useContext(PaginationContext);

    const [params, setPage] = usePagination(
        (page) => ({
            page: String(page)
        }),
        []
    );

    const { setPageRef, rickAndMortyData, hasNextPage, error, loading } = useRickAndMortyData({
        params,
        pagination
    });

    const { meta, results } = rickAndMortyData;

    const onRefresh = () => setPage(1);
    const onEndReached = () => hasNextPage && setPage(Number(params.page) + 1);
    const onSelectPage = (nextPage: number) => !loading && setPage(nextPage);

    return (
        <div ref={setPageRef}>
            <div className={styles.dropdownWrapper}>
                <ViewDropdown />
                <PaginationDropdown />
            </div>

            {view === PageViews.card && <RickAndMortyCards title="Rick and Morty" data={results} />}
            {view === PageViews.table && <Table dataSource={results} columns={rickAndMortyColumns} />}

            {pagination === PaginationTypes.infinity && !loading && <InfiniteLoader offset={150} onReached={onEndReached} />}
            {pagination === PaginationTypes.manual && (
                <PaginationComponent loading={loading} pageSize={20} pagesLength={meta.count} currentPage={Number(params.page)} onSelectPage={onSelectPage} />
            )}

            <NotificationError title="Fetch Rick and Morty error notification" message={error?.message} />

            {loading && <Spin />}
        </div>
    );
};