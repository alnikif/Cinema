import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout/Layout';
import Providers from './Providers';

const App = () => {
  return (
    <Providers>
      <>
        <Layout />
        <Outlet />
      </>
    </Providers>
  );
};

export default App;
