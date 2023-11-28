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
        path: '/rickandmorty',
        element: <RickAndMorty />
      },
      {
        path: '/thestarwars',
        element: <TheStarWars />
      }
    ]
  }
]);
