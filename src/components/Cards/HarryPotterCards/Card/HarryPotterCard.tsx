import React from 'react';

import { HarryPotterType } from '../../../../types/harryPotterTypes';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import styles from './HarryPotterCard.module.scss';

const { Meta } = Card;

export const HarryPotterCard: React.FC<{ readonly characterData: HarryPotterType }> = ({ characterData }) => {
  const { id, image, name, gender, species, wizard } = characterData;
  return (


<>
      <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={image} />}
      >
          <Meta title={<Link to={`/harry-potter/${id}`} className={styles.link}>
              {name}
          </Link>} description={gender} />
          <div className={styles.CharacterInfo}>
              <div className={styles.species}>
                  {species}
              </div>
              <div className={styles.wizard}>
                  {wizard && 'wizard'}
              </div>
          </div>
      </Card>

    {/*Custom card*/}

    {/*  */}
    {/*<div className={styles.CharacterCard}>*/}
    {/*  <img src={image} alt={name} />*/}
    {/*  <div>*/}
    {/*    <Link to={`/harry-potter/${id}`} className={styles.link}>*/}
    {/*      {name}*/}
    {/*    </Link>*/}
    {/*  </div>*/}
    {/*  <div className={styles.CharacterInfo}>*/}
    {/*    <div>{gender}</div>*/}
    {/*    <div>{species}</div>*/}
    {/*    <div>{wizard ? 'wizard' : 'muggle'}</div>*/}
    {/*  </div>*/}
    {/*</div>*/}
</>
  );
};
