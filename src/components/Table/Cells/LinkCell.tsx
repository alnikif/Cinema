import React from 'react';
import { Link } from 'react-router-dom';

type LinkCellProps = {
  readonly link: string;
  readonly title?: string
};

export const LinkCell: React.FC<LinkCellProps> = ({ link, title }) => {
  return <Link to={link}>
    {title ? title : link }
  </Link>;
};
