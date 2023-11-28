import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar';

const Layout = () => {
  return (
    <div>
      {/*<Title title={pageTitle} />*/}
      <div className="content">
        <Sidebar />
        {/*<main>{children}</main>*/}
      </div>
    </div>
  );
};

export default Layout;
