import React from 'react';
import { RickAndMortyType } from '../../../../types/rickAndMortyTypes';
import { Link } from 'react-router-dom';
import {Card} from "antd";

import styles from './RickAndMortyCard.module.scss';

const { Meta } = Card;

export const RickAndMortyCard: React.FC<{ readonly characterData: RickAndMortyType }> = ({ characterData }) => {
  const { id, image, name, gender, species, status, location } = characterData;
  return (
      <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={image} style={{ height: 240 }} />}
      >
          <Meta title={<Link to={`/rick-and-morty/${id}`} className={styles.link}>
              {name}
          </Link>} description={gender} />
          <div className={styles.CharacterInfo}>
              <div className={styles.species}>
                  {species}
              </div>
              <div className={styles.location}>
                  {location.name}
              </div>
          </div>
      </Card>
  );
};
