import React from 'react';
import { NavItem } from './NavItem';

export const Sidebar = () => {
  return (
    <div>
      <NavItem url="/homepage" title="Home Page" />
      <NavItem url="/pokemons" title="Pokemons" />
      <NavItem url="/rickandmorty" title="Rick and Morty" />
      <NavItem url="thestarwars" title="The Star Wars" />
    </div>
  );
};
