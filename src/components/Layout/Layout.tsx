import React from 'react';
// import './index.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;



// import { Header } from './Header/Header';
import Dropdown from '../Dropdown/Dropdown';
import { ThemeContext } from '../../Providers/ThemeProvider';
import { themes } from '../../constants/theme';
import styles from './Layout.module.scss';
import {Link} from "react-router-dom";

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

// export const Layout = () => {
//   const themesOptions = themes.map(({ key, title }) => ({
//     id: key,
//     label: title
//   }));
//
//   const { theme, setTheme: onChangeTheme } = useContext(ThemeContext);
//
//   return (
//       <div className={styles.layoutWrapper}>
//         <div className={styles.headerWrapper}>
//           <Header navItemsConfig={navItemsConfig} />
//         </div>
//         <div className={styles.dropdownThemeWrapper}>
//           <Dropdown selectedOptionId={theme} options={themesOptions} onSelect={onChangeTheme} />
//         </div>
//       </div>
//   );
// };



const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const LayoutWrapper: React.FC = () => {
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
          <div className="demo-logo" />
          <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={items}
              style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{ padding: '0 48px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {navItemsConfig.map(el => <Breadcrumb.Item key={el.label} href={el.url}>{el.label}</Breadcrumb.Item>)}
          </Breadcrumb>
          <div
              style={{
                padding: 24,
                minHeight: 380,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
          >
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
  );
};

export default LayoutWrapper;