import React from 'react';

import { Layout, Menu, theme} from 'antd';
import {Link, Outlet} from "react-router-dom";

const { Header, Content, Footer } = Layout;

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
  { label: NavItems.homePage, url: '/' },
  { label: NavItems.harryPotter, url: '/harry-potter' },
  { label: NavItems.rickAndMorty, url: '/rick-and-morty' },
  { label: NavItems.theStarWars, url: '/star-wars' },
  { label: NavItems.formPlayground, url: '/form-playground' }
];

const items = navItemsConfig.map((item, index) => ({
    key: String(index + 1),
    label: <Link to={item.url}>{item.label}</Link>,
}));

const LayoutWrapper = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
      <Layout>
        <Header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
        >
          <Menu
              theme="dark"
              mode="horizontal"
              items={items}
              style={{ flex: 1, minWidth: 0 }}
          />

        </Header>
        <Content style={{ padding: '0 48px' }}>
          <div
              style={{
                padding: 24,
                minHeight: 380,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
          >
              <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
  );
};

export default LayoutWrapper;