import React from 'react';
import { NameCell } from '../Cells/NameCell';
import { HeaderCellWrapper } from '../CellWrappers/HeaderCellWrapper/HeaderCellWrapper';

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
        <HeaderCellWrapper key={headerCell.id}>
          <NameCell name={headerCell.label} />
        </HeaderCellWrapper>
      ))}
    </>
  );
};
