import React, { useMemo } from 'react';
import { HeaderRow } from './HeaderRow/HeaderRow';
import { BodyRows, BodyRowType } from './BodyRows/BodyRows';
import { CellType } from './CellType';
import styles from './Table.module.scss';

type DataItemType = {
  id: string | number;
} & Record<string, unknown>;

type TableConfigType<T> = {
  id: string;
  dataKey: string;
  label: string;
  cellType: CellType;
  width?: number;
  getCellValue?: (itemData: T) => string;
};

type TableProps<T> = {
  readonly title: string;
  readonly tableConfig: TableConfigType<T>[];
  readonly data: T[];
};

const NOOP = () => {
  //
};

export const Table = <T extends DataItemType>(props: TableProps<T>) => {
  const { title, tableConfig, data } = props;

  const headerRow = useMemo(() => tableConfig.map(({ id, label }) => ({ id, label })), [tableConfig]);
  const gridTemplateColumns = useMemo(() => tableConfig.reduce((acc, column) => `${acc} ${column.width}fr`, ''), [tableConfig]);

  const bodyRows = useMemo(
    () =>
      data.reduce((acc: BodyRowType[], dataItem) => {
        const rowCells = tableConfig.map((column) => {
          const { id, dataKey, cellType, label, getCellValue = NOOP } = column;
          const rowKey = `${id}/${dataKey}`;
          const cellValue = getCellValue(dataItem) || dataItem[dataKey] || '';

          return {
            key: rowKey,
            columnKey: id,
            cellType,
            value: cellValue,
            label
          };
        });

        const bodyRow = { key: String(dataItem.id), cells: rowCells };

        return [...acc, bodyRow];
      }, []),
    [data, tableConfig]
  );

  return (
    <div className={styles.tableContainer}>
      <h1>{title}</h1>

      <div className={styles.tableWrapper} style={{ gridTemplateColumns }}>
        <HeaderRow headerRow={headerRow} />
        <>
          {bodyRows.map((bodyRow) => (
            <BodyRows key={bodyRow.key} bodyRow={bodyRow} />
          ))}
        </>
      </div>
    </div>
  );
};
