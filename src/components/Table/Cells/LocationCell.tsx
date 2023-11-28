import React from 'react';
import { CellWrapper } from '../CellWrapper/CelllWrapper';

type LocationCellProps = {
  readonly location: Record<string, string>;
};

export const LocationCell: React.FC<LocationCellProps> = ({ location }) => {
  return <CellWrapper>{location}</CellWrapper>;
};
