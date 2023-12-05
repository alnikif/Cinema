import React from 'react';

import { CellType } from '../CellType';
import { NameCell } from '../Cells/NameCell';
import { ImageCell } from '../Cells/ImageCell';
import { CellWrapper } from '../CellWrappers/CellWrapper/CelllWrapper';
import { GenderCell } from '../Cells/GenderCell';
import { LocationCell } from '../Cells/LocationCell';
import { SpeciesCell } from '../Cells/SpeciesCell';
import { StatusCell } from '../Cells/StatusCell';
import { TypeCell } from '../Cells/TypeCell';
import { LinkCell } from '../Cells/LinkCell';
import { ClassCell } from '../Cells/ClassCell';
import { HomeWorldCell } from '../Cells/HomeWorldCell';
import { ApprenticesCell } from '../Cells/ApprenticesCell';
import { CyberneticsCell } from '../Cells/CyberneticsCell';
import { MastersCell } from '../Cells/MastersCell';


export type BodyCellType = {
  key: string;
  cellType: CellType;
  value: unknown;
  label?: string;
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
            case CellType.link:
              return <LinkCell link={bodyCell.value as string} />;
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
            case CellType.class:
              return <ClassCell class={bodyCell.value as string} />;
            case CellType.homeworld:
              return <HomeWorldCell homeworld={bodyCell.value as string} />;
            case CellType.apprentices:
              return <ApprenticesCell apprentices={bodyCell.value as string[] | undefined} />;
            case CellType.cybernetics:
              return <CyberneticsCell cybernetics={bodyCell.value as string} />;
            case CellType.masters:
              return <MastersCell masters={bodyCell.value as string[] | undefined} />;
            case CellType.wiki:
              return <LinkCell title='link to wiki' link={bodyCell.value as string} />;
            default:
              null;
          }
        };

        return <CellWrapper key={Number(bodyCell.key)}>{cellContent()}</CellWrapper>;
      })}
    </>
  );
};
