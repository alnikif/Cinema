import React from 'react';
import { NameCell } from '../Cells/NameCell';
import { CellWrapper } from '../CellWrapper/CelllWrapper';

export type HeaderCellType = {
  id: string;
  label: string;
};

type HeaderRowCellType = {
  readonly headerRow: HeaderCellType[];
};

export const HeaderRow: React.FC<HeaderRowCellType> = (props) => {
  const { headerRow } = props;

  return (
    <>
      {headerRow.map((headerCell) => (
        <CellWrapper key={headerCell.id}>
          <NameCell name={headerCell.label} />
        </CellWrapper>
      ))}
    </>
  );
};
