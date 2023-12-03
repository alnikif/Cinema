import React from 'react';

type ClassCellProps = {
  readonly class: string;
};

export const ClassCell: React.FC<ClassCellProps> = ({ class: classType }) => {
  return <div>{classType}</div>;
};
