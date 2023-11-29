import React from 'react';
import { Link } from 'react-router-dom';

type NavItemProps = {
  readonly url: string;
  readonly title: string;
};
export const NavItem: React.FC<NavItemProps> = ({ url, title }) => {
  return <Link to={url}>{title}</Link>;
};
