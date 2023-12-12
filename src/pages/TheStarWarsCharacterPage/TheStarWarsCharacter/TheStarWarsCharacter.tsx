import React from 'react';

import { StarWarsType } from '../../../types/starWarsTypes';
import styles from './TheStarWarsCharacter.module.scss';

export const TheStarWarsCharacter: React.FC<{ readonly characterData: StarWarsType }> = ({ characterData }) => {
  const {
    image,
    name,
    gender,
    model,
    class: classDroid,
    cybernetics,
    species,
    homeworld,
    bornLocation,
    diedLocation,
    masters,
    apprentices
  } = characterData;
  return (
    <div className={styles.CharacterCard}>
      <div>
        <img src={image} alt={name} />
      </div>
      <div className={styles.CharacterInfo}>
        <div className={styles.CharacterName}>{name}</div>
        <div>
          <div>{gender}</div>
          <div>{species}</div>
          {cybernetics && <div>Cybernetics: {cybernetics}</div>}
          <div>Home: {homeworld}</div>
          {model && <div>Model: {model}</div>}
          {classDroid && <div>class: {classDroid}</div>}
          {bornLocation && <div>Born Location: {bornLocation}</div>}
          {diedLocation && <div>Died Location: {diedLocation}</div>}
          {masters && (
            <div>
              <h3>Masters</h3>
              {masters.map((master) => (
                <div key={`${master}/${name}`}>-{master}</div>
              ))}
            </div>
          )}
          {apprentices && (
            <div>
              <h3>Apprentices</h3>
              {apprentices.map((apprentic) => (
                <div key={`${apprentic}/${name}`}>-{apprentic}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
