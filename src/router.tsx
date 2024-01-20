import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { HarryPotter } from './pages/HarryPotter/HarryPotter';
import { RickAndMorty } from './pages/RickAndMorty/RickAndMorty';
import { TheStarWars } from './pages/TheStarWars/TheStarWars';
import { RickAndMortyCharacterPage } from './pages/RickAndMortyCharacterPage/RickAndMortyCharacterPage';
import { TheStarWarsCharacterPage } from './pages/TheStarWarsCharacterPage/TheStarWarsCharacterPage';
import { HarryPotterCharacterPage } from './pages/HarryPotterCharacterPage/HarryPotterCharacterPage';
import FormPlayground from './pages/FormPlayground/FormPlayground';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/harry-potter',
        element: <HarryPotter />
      },
      {
        path: '/rick-and-morty',
        element: <RickAndMorty />
      },
      {
        path: '/star-wars',
        element: <TheStarWars />
      },
      {
        path: '/star-wars/:characterId',
        element: <TheStarWarsCharacterPage />
      },
      {
        path: '/rick-and-morty/:characterId',
        element: <RickAndMortyCharacterPage />
      },
      {
        path: '/harry-potter/:characterId',
        element: <HarryPotterCharacterPage />
      },
      {
        path: '/form-playground',
        element: <FormPlayground />
      }
    ]
  }
]);