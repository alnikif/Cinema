import React from 'react';
import styles from './StarWarsCard.module.scss';
import { StarWarsType } from '../../../../types/starWarsTypes';
import { Link } from 'react-router-dom';

export const StarWarsCard: React.FC<{ readonly characterData: StarWarsType }> = ({ characterData }) => {
  const { image, name, gender, species, homeworld, id } = characterData;
  return (
    <div className={styles.CharacterCard}>
      <img src={image} alt={name} />
      <div>
        <Link to={`/star-wars/${id}`} className={styles.link}>
          {name}
        </Link>
      </div>
      <div className={styles.CharacterInfo}>
        <div>{gender}</div>
        <div>{species}</div>
        <div>{homeworld}</div>
      </div>
    </div>
  );
};
