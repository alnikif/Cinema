import React from 'react';
import { Link } from 'react-router-dom';

type LinkCellProps = {
  readonly link: string;
  readonly label: string;
};

export const LinkCell: React.FC<LinkCellProps> = ({ link, label }) => {
  return <Link to={link}>{label}</Link>;
};
