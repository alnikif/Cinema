import React from 'react';
import { Header } from './Header/Header';

export enum NavItems {
  homePage = 'Home Page',
  pokemons = 'Pokemons',
  rickAndMorty = 'Rick and Morty',
  theStarWars = 'The Star Wars'
}

export type NavItemType = {
  label: NavItems;
  url: string;
};

export const navItemsConfig = [
  { label: NavItems.homePage, url: '/homepage' },
  { label: NavItems.pokemons, url: '/pokemons' },
  { label: NavItems.rickAndMorty, url: '/rick-and-morty' },
  { label: NavItems.theStarWars, url: '/star-wars' }
];

export const Layout = () => {
  return (
    <div>
      <Header navItemsConfig={navItemsConfig} />
    </div>
  );
};
