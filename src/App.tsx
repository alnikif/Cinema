import React from 'react';
import LayoutWrapper from './components/Layout/Layout';
import Providers from './Providers';

import './App.css';

const App = () => {
  return (
    <Providers>
        <LayoutWrapper />
    </Providers>
  );
};

export default App;
