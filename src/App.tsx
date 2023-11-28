import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
