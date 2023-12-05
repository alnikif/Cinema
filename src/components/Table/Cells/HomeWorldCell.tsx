import React from 'react';

type HomeWorldCellProps = {
  readonly homeworld: string;
};

export const HomeWorldCell: React.FC<HomeWorldCellProps> = ({ homeworld }) => {
  return <div>{homeworld}</div>;
};
