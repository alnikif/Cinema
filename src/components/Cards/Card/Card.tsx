import React from 'react';
import { RickAndMortyType } from '../../../pages/RickAndMorty/RickAndMortyCharacter/RickAndMortyCharacter';
import styles from './Card.module.scss';

export const Card: React.FC<{ readonly characterData: RickAndMortyType }> = ({ characterData }) => {
  const { image, name, gender, species, status, location } = characterData;
  return (
    <div className={styles.CharacterCard}>
      <img src={image} alt={name} />
      <div>{name}</div>
      <div className={styles.CharacterInfo}>
        <div>{gender}</div>
        <div>{species}</div>
        <div>{status}</div>
      </div>
      <div>Location: {location.name}</div>
    </div>
  );
};
