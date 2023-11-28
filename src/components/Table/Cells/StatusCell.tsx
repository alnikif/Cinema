import React from 'react';

type StatusCellProps = {
  readonly status: string;
};

export const StatusCell: React.FC<StatusCellProps> = ({ status }) => {
  return <div>{status}</div>;
};
