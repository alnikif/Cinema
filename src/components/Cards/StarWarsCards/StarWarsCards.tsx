import React from 'react';

import { StarWarsCard } from './Card/StarWarsCard'
import styles from './StarWarsCards.module.scss'
import { StarWarsType } from '../../../types/starWarsTypes';

export type CardsPropsType = {
  readonly data: StarWarsType[];
  readonly title: string
}

export const StarWarsCards: React.FC<CardsPropsType> = ({ data, title }) => {
  return (
    <div className={styles.CardsContainer}>
      <h2>{title}</h2>
      <div className={styles.CardsWrapper}>
        {data.map(card => (
          <StarWarsCard key={card.id} characterData={card} />
        ))}
      </div>
    </div>

  );
}