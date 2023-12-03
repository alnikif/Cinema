import React from 'react';

type GenderCellProps = {
  readonly gender: string | number;
};

export const GenderCell: React.FC<GenderCellProps> = ({ gender }) => {
  return <div>{gender}</div>;
};
