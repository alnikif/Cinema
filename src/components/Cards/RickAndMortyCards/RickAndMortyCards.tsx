import React from 'react';

import { RickAndMortyType } from '../../../types/rickAndMortyTypes';
import { RickAndMortyCard } from './Card/RickAndMortyCard';
import styles from './RickAndMortyCards.module.scss'
import {withListLayout} from "../../ListContainer/ListContainer";
import {StarWarsCard} from "../StarWarsCards/Card/StarWarsCard";

export type CardsPropsType = {
  readonly data: RickAndMortyType[];
  readonly title: string
}

const RickAndMortyList = withListLayout();


export const RickAndMortyCards: React.FC<CardsPropsType> = ({ data, title }) => {
  return (
      <RickAndMortyList title="Rick and Morty" data={data}>
          {(listItem) => <RickAndMortyCard key={listItem.id} characterData={listItem} />}
      </RickAndMortyList>

  );
}