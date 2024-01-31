import React from 'react';
import { NavItem } from './NavItem';
import { NavItemType } from '../Layout/Layout';

import styles from './Sidebar.module.scss';

export type NavItemTypes = {
  readonly navItemsConfig: NavItemType[];
};

export const Sidebar: React.FC<NavItemTypes> = ({ navItemsConfig }) => {
  return (
      <div className={styles.SidebarContainer}>
        {navItemsConfig.map((item: NavItemType) => {
          return <NavItem key={item.label} url={item.url} title={item.label} />;
        })}
      </div>
  );
};