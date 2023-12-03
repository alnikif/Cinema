import React from 'react';

import { RickAndMortyType } from '../../types/rickAndMortyTypes';
import { Card } from './Card/Card';
import styles from './Cards.module.scss'

export type CardsPropsType = {
  readonly data: RickAndMortyType[];
  readonly title: string
}

export const Cards: React.FC<CardsPropsType> = ({ data, title }) => {
  return (
    <div className={styles.CardsContainer}>
      <h2>{title}</h2>
      <div className={styles.CardsWrapper}>
        {data.map(card => (
          <Card key={card.id} characterData={card} />
        ))}
      </div>
    </div>

  );
}
