import React from 'react';
import { Link } from 'react-router-dom';

type LinkCellProps = {
  readonly link: string;
};

export const LinkCell: React.FC<LinkCellProps> = ({ link }) => {
  return <Link to={link}>{link}</Link>;
};
