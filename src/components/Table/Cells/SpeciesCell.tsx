import React from 'react';

type SpeciesCellProps = {
  readonly species: string;
};

export const SpeciesCell: React.FC<SpeciesCellProps> = ({ species }) => {
  return <div>{species}</div>;
};
