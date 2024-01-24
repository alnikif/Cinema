import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import LayoutWrapper from './components/Layout/Layout';
import Providers from './Providers';

const App = () => {
  return (
    <Providers>
      <>
        <LayoutWrapper />
      </>
    </Providers>
  );
};

export default App;
