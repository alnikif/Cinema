import React from 'react';
import { Sidebar } from '../../Sidebar/Sidebar';
import { NavItemType } from '../Layout';


export type NavItemTypes = {
    readonly navItemsConfig: NavItemType[];
};

export const Header: React.FC<NavItemTypes> = ({ navItemsConfig }) => <Sidebar navItemsConfig={navItemsConfig} />;
