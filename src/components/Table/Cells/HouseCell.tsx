import React from 'react';

type HouseCellProps = {
  readonly house: string;
};

export const HouseCell: React.FC<HouseCellProps> = ({ house }) => {
  return <div>{house}</div>;
};
