import {PageViews, ViewContext, ViewContextType} from "./ViewProvider";
import React, {createContext, FC, ReactNode, useMemo, useState} from "react";

export enum PaginationTypes {
    infinity = 'infinity',
    manual = 'manual'
}

export const paginations = [
    {key: PaginationTypes.manual, title: 'Manual Pagination'},
    {key: PaginationTypes.infinity, title: 'Infinity Pagination'},
];

export const DEFAULT_PAGINATION = PaginationTypes.manual;

export type PaginationContextType = {
    pagination: PaginationTypes;
    setPagination: (nextPagination: PaginationTypes) => void;
};

const defaultPaginationContext = {
    pagination: DEFAULT_PAGINATION,
    setPagination: () => {
        //
    }
};

export const PaginationContext = createContext<PaginationContextType>(defaultPaginationContext);

type ProvidersType = {
    readonly children: ReactNode;
};

export const PaginationProvider: FC<ProvidersType> = (props) => {
    const { children } = props;

    const [pagination, setPagination] = useState<PaginationTypes>(defaultPaginationContext.pagination);

    const paginationContextValue = useMemo(
        () => ({
            pagination,
            setPagination
        }),
        [pagination]
    );

    return <PaginationContext.Provider value={paginationContextValue}>{children}</PaginationContext.Provider>;
};
