import { useEffect, useState } from 'react';
import uniqBy from 'lodash/uniqBy';

import { PaginationTypes } from '../../Providers/PaginationProvider';
import { getRickAndMortyList } from '../../api/rickAndMorty';
import { RickAndMortyListResponseMetaType, RickAndMortyType } from '../../types/rickAndMortyTypes';

type UseRickAndMortyDataParams = {
    params: { page: string };
    pagination: PaginationTypes;
};

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

const useRickAndMortyData = (props: UseRickAndMortyDataParams) => {
    const { params, pagination } = props;

    const [pageRef, setPageRef] = useState<HTMLDivElement | null>(null);
    const [rickAndMortyData, setRickAndMortyData] = useState<RickAndMortyResponseType>(rickAndMortyInitialData);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(false);

    const isInfinityPagination = pagination === PaginationTypes.infinity;
    const hasNextPage = !!rickAndMortyData.meta.next;

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

    return {
        pageRef,
        setPageRef,
        rickAndMortyData,
        hasNextPage,
        setRickAndMortyData,
        error,
        setError,
        loading,
        setLoading
    };
};

export default useRickAndMortyData;