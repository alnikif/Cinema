import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout/Layout';

const App = () => {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
};

export default App;
