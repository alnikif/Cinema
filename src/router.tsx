import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { HomePage } from './pages/HomePage/HomePage';
import { Pokemons } from './pages/Pokemons/Pokemons';
import { RickAndMorty } from './pages/RickAndMorty/RickAndMorty';
import { TheStarWars } from './pages/TheStarWars/TheStarWars';
import App from './App';
import { RickAndMortyCharacter } from './pages/RickAndMorty/RickAndMortyCharacter/RickAndMortyCharacter';
import { TheStarWarsCharacter } from './pages/TheStarWars/TheStarWarsCharacter/TheStarWarsCharacter';

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
