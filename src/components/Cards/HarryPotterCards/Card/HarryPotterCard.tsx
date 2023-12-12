import React from 'react';
import { HarryPotterType } from '../../../../types/harryPotterTypes';
import styles from './HarryPotterCard.module.scss';
import { Link } from 'react-router-dom';

export const HarryPotterCard: React.FC<{ readonly characterData: HarryPotterType }> = ({ characterData }) => {
  const { id, image, name, gender, species, wizard } = characterData;
  return (
    <div className={styles.CharacterCard}>
      <img src={image} alt={name} />
      <div>
        <Link to={`/harry-potter/${id}`} className={styles.link}>
          {name}
        </Link>
      </div>
      <div className={styles.CharacterInfo}>
        <div>{gender}</div>
        <div>{species}</div>
        <div>{wizard ? 'wizard' : 'muggle'}</div>
      </div>
    </div>
  );
};
