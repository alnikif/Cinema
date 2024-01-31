import React, { FC } from 'react';
import { Pagination } from 'antd';

import styles from './Pagination.module.scss'

export type PaginationPropsType = {
    readonly pagesLength: number;
    readonly currentPage: number;
    readonly loading: boolean;
    readonly onSelectPage: (nextPage: number) => void;
    readonly pageSize:number;
};

export const PaginationComponent: FC<PaginationPropsType> = (props) => {
    const { pagesLength, currentPage, onSelectPage } = props;

    return (
        <div className={styles.paginationButtons}>
            <Pagination
                defaultCurrent={currentPage}
                total={pagesLength}
                onChange={(page) => onSelectPage(page)}

            />
        </div>
    );
}


