import React from 'react';
import { Sidebar } from '../../Sidebar/Sidebar';
import { Title } from '../Title';
import { NavItemType } from '../Layout';

export type NavItemTypes = {
  readonly navItemsConfig: NavItemType[];
};

export const Header: React.FC<NavItemTypes> = ({ navItemsConfig }) => {
  return (
    <>
      <Sidebar navItemsConfig={navItemsConfig} />
      <Title />
    </>
  );
};
