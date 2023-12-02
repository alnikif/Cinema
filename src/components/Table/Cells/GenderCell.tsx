import React from 'react';
import { CellWrapper } from '../CellWrappers/CellWrapper/CelllWrapper';

type GenderCellProps = {
  readonly gender: string | number;
};

export const GenderCell: React.FC<GenderCellProps> = ({ gender }) => {
  return <div>{gender}</div>;
};
