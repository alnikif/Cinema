import React from 'react';
import styles from './StarWarsCard.module.scss';
import { StarWarsType } from '../../../../types/starWarsTypes';

export const StarWarsCard: React.FC<{ readonly characterData: StarWarsType }> = ({ characterData }) => {
  const { image, name, gender, species, homeworld } = characterData;
  return (
    <div className={styles.CharacterCard}>
      <img src={image} alt={name} />
      <div>{name}</div>
      <div className={styles.CharacterInfo}>
        <div>{gender}</div>
        <div>{species}</div>
        <div>{homeworld}</div>
      </div>
    </div>
  );
};
