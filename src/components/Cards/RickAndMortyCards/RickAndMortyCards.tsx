import React from 'react';

import { RickAndMortyType } from '../../../types/rickAndMortyTypes';
import { RickAndMortyCard } from './Card/RickAndMortyCard';
import styles from './RickAndMortyCards.module.scss'

export type CardsPropsType = {
  readonly data: RickAndMortyType[];
  readonly title: string
}

export const RickAndMortyCards: React.FC<CardsPropsType> = ({ data, title }) => {
  return (
    <div className={styles.CardsContainer}>
      <h2>{title}</h2>
      <div className={styles.CardsWrapper}>
        {data.map(card => (
          <RickAndMortyCard key={card.id} characterData={card} />
        ))}
      </div>
    </div>

  );
}