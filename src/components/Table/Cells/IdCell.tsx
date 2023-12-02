import React from 'react';
import { Link } from 'react-router-dom';

type IdCellProps = {
  readonly id: number;
};

export const IdCell: React.FC<IdCellProps> = ({ id }) => {
  return <div>{id}</div>;
};
