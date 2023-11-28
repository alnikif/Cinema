import React from 'react';

type TypeCellProps = {
  readonly type: string;
};

export const TypeCell: React.FC<TypeCellProps> = ({ type }) => {
  return <div>{type}</div>;
};
