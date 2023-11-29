import React from 'react';
import { NavItem } from './NavItem';
import styles from './Sidebar.module.scss';
// import { NavItems } from '../Layout/Layout';
import { NavItemType } from '../Layout/Layout';
import { NavItemTypes } from '../Layout/Header/Header';

export const Sidebar: React.FC<NavItemTypes> = ({ navItemsConfig }) => {
  return (
    <div className={styles.SidebarContainer}>
      {navItemsConfig.map((item: NavItemType) => {
        return <NavItem key={item.label} url={item.url} title={item.label} />;
      })}
    </div>
  );
};
