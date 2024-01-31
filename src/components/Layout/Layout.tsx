import React from 'react';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import { Link, Outlet } from 'react-router-dom';
import { BaseUrlsEnum } from '../../constants/routerConstants';

import styles from './Layout.module.scss';


export enum NavItems {
    homePage = 'Home Page',
    harryPotter = 'Harry Potter',
    rickAndMorty = 'Rick and Morty',
    theStarWars = 'The Star Wars',
    formPlayground = 'Form Playground'
}

export type NavItemType = {
    label: NavItems;
    url: string;
};

export const navItemsConfig = [
    { label: NavItems.homePage, url: BaseUrlsEnum.home },
    { label: NavItems.harryPotter, url: BaseUrlsEnum.harrPotter },
    { label: NavItems.rickAndMorty, url: BaseUrlsEnum.rickAndMorty },
    { label: NavItems.theStarWars, url: BaseUrlsEnum.starWars },
    { label: NavItems.formPlayground, url: BaseUrlsEnum.formPlayground }
];

const items = navItemsConfig.map((item, index) => ({
    key: String(index + 1),
    label: <Link to={item.url}>{item.label}</Link>
}));

const LayoutWrapper = () => {

    return (
        <Layout>
            <Header
                className={styles.headerContainer}
            >
                <Menu className={styles.menuContainer} theme="dark" mode="horizontal" items={items} />
            </Header>
            <Content className={styles.contentWrapper}>
                <div className={styles.contentContainer}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©️{new Intl.DateTimeFormat('en-US').format(new Date())} Created by Ant UED</Footer>
        </Layout>
    );
};

export default LayoutWrapper;
