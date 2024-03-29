import React from 'react';
import { HarryPotterType } from '../../../../types/harryPotterTypes';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import cx from "classnames";

import styles from './HarryPotterCard.module.scss';

const { Meta } = Card;

export const HarryPotterCard: React.FC<{ readonly characterData: HarryPotterType }> = ({ characterData }) => {
  const { id, image, name, gender, species, wizard } = characterData;
  return (
      <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" className={styles.img} src={image}  />}
      >
          <Meta title={<Link to={`/harry-potter/${id}`} className={styles.link}>
              {name}
          </Link>} description={gender} />
          <div className={styles.CharacterInfo}>
              <div className={styles.species}>
                  {species}
              </div>
              <div className={cx(wizard && styles.wizard)}>
                  {wizard && 'wizard'}
              </div>
          </div>
      </Card>
  );
};
