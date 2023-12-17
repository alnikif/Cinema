import React, { FC } from 'react';

export type PaginationPropsType = {
    readonly pagesLength: number;
    readonly currentPage: number;
    readonly onSelectPage: (nextPage: number) => void;
};

export const Pagination: FC<PaginationPropsType> = (props) => {
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


