import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { Pokemons } from './pages/Pokemons/Pokemons';
import { RickAndMorty } from './pages/RickAndMorty/RickAndMorty';
import { TheStarWars } from './pages/TheStarWars/TheStarWars';
import { RickAndMortyCharacter } from './pages/RickAndMortyCharacter/RickAndMortyCharacter';
import { TheStarWarsCharacter } from './pages/TheStarWarsCharacter/TheStarWarsCharacter';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/pokemons',
        element: <Pokemons />
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
        element: <TheStarWarsCharacter />
      },
      {
        path: '/rick-and-morty/:characterId',
        element: <RickAndMortyCharacter />
      }
    ]
  }
]);
