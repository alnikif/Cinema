import React from 'react';
import { Link } from 'react-router-dom';

type LocationCellProps = {
  readonly value: { name: string; url: string };
};

export const LocationCell: React.FC<LocationCellProps> = ({ value }) => {
  return <Link to={value.url}>{value.name}</Link>;
};
