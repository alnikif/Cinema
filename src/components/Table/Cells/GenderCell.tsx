import React from 'react';
import { CellWrapper } from '../CellWrapper/CelllWrapper';

type GenderCellProps = {
  readonly gender: string | number;
};

export const GenderCell: React.FC<GenderCellProps> = ({ gender }) => {
  return <CellWrapper>{gender}</CellWrapper>;
};
