import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { HomePage } from './pages/HomePage/HomePage';
import { Pokemons } from './pages/Pokemons/Pokemons';
import { RickAndMorty } from './pages/RickAndMorty/RickAndMorty';
import { TheStarWars } from './pages/TheStarWars/TheStarWars';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/homepage',
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
      }
    ]
  }
]);
