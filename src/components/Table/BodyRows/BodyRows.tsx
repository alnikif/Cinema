import React from 'react';
import { CellType } from '../CellType';
import { NameCell } from '../Cells/NameCell';
import { ImageCell } from '../Cells/ImageCell';
import { IdCell } from '../Cells/IdCell';
import { CellWrapper } from '../CellWrapper/CelllWrapper';
import { GenderCell } from '../Cells/GenderCell';
import { LocationCell } from '../Cells/LocationCell';
import { SpeciesCell } from '../Cells/SpeciesCell';
import { StatusCell } from '../Cells/StatusCell';
import { TypeCell } from '../Cells/TypeCell';

export type BodyCellType = {
  key: number;
  cellType: CellType;
  value: unknown;
};

export type BodyRowType = {
  key: string;
  cells: BodyCellType[];
};

type BodyRowCellType = {
  readonly bodyRow: BodyRowType;
};

export const BodyRows: React.FC<BodyRowCellType> = (props) => {
  const { bodyRow } = props;

  return (
    <>
      {bodyRow.cells.map((bodyCell: BodyCellType) => {
        const cellContent = () => {
          switch (bodyCell.cellType) {
            case CellType.id:
              return <IdCell id={bodyCell.value as number} />;
            case CellType.name:
              return <NameCell name={bodyCell.value as string} />;
            case CellType.gender:
              return <GenderCell gender={bodyCell.value as string} />;
            case CellType.image:
              return <ImageCell image={bodyCell.value as string} />;
            case CellType.location:
              return <LocationCell value={bodyCell.value as { name: string; url: string }} />;
            case CellType.species:
              return <SpeciesCell species={bodyCell.value as string} />;
            case CellType.status:
              return <StatusCell status={bodyCell.value as string} />;
            case CellType.type:
              return <TypeCell type={bodyCell.value as string} />;
            default:
              null;
          }
        };

        return <CellWrapper key={String(bodyCell.key)}>{cellContent()}</CellWrapper>;
      })}
    </>
  );
};
