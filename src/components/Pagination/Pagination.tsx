import React, { FC } from 'react';

import styles from './Pagination.module.scss'

export type PaginationPropsType = {
    readonly pagesLength: number;
    readonly currentPage: number;
    readonly loading: boolean;
    readonly onSelectPage: (nextPage: number) => void;
};

export const Pagination: FC<PaginationPropsType> = (props) => {
    const { loading, pagesLength, currentPage, onSelectPage } = props;
    const lastPage = pagesLength;

    const pages = Array
        .from({ length: pagesLength }, (_, i) => i + 1)
        .filter(item => (
            item !== lastPage && item !== 1 && Math.abs(item - currentPage) <= 2
        ));

    return (
        <div className={styles.paginationButtons}>
            <button
                type="button"
                disabled={ loading || currentPage === 1}
                onClick={() => onSelectPage(1)}
            >
                1
            </button>
            {pages.map((pageNumber, i) => (
                <button
                    type="button"
                    disabled={loading}
                    key={String(pageNumber)}
                    className={currentPage === pageNumber ? styles.active : ''}
                    onClick={() => onSelectPage(Number(pageNumber))}
                >
                    {pageNumber}
                </button>
            ))}
            <button
                type="button"
                disabled={ loading || currentPage === lastPage}
                onClick={() => onSelectPage(lastPage)}
            >
                {lastPage}
            </button>
        </div>
    );
}


