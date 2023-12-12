import React from 'react';
import { HarryPotterType } from '../../../types/harryPotterTypes';
import styles from './HarryPotterCharacter.module.scss';
import cx from 'classnames';

export const HarryPotterCharacter: React.FC<{ readonly characterData: HarryPotterType[] }> = ({ characterData }) => {
  const [data] = characterData;
  const { name, house, gender, species, alternate_names: alternateNames, image, ancestry, dateOfBirth, wizard, alive } = data;

  return (
    <div className={styles.CharacterCard}>
      <img src={image} alt={name} />
      <div
        className={cx(
          styles.Wrapper,
          house === 'Gryffindor' && styles.Gryffindor,
          house === 'Slytherin' && styles.Slytherin,
          house === 'Hufflepuff' && styles.Hufflepuff,
          house === 'Ravenclaw' && styles.Ravenclaw
        )}
      >
        <div className={styles.CharacterInfo}>
          <h2>{name}</h2>
          <div>Date of birth: {dateOfBirth}</div>
          <div>{wizard ? 'Wizard' : 'Muggle'}</div>
          <div> {gender}</div>
          <div>{species}</div>
          {ancestry.length > 0 && <div>Ancestry: {ancestry}</div>}
          <div>Status: {alive ? 'alive' : 'dead'}</div>
        </div>
        <div>
          {alternateNames.length > 0 && (
            <>
              <h3>Alternate names: </h3>
              {alternateNames.map((el) => (
                <div key={el}> -{el} </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
