import React from 'react';
import { RickAndMortyType } from '../../../../types/rickAndMortyTypes';
import { Link } from 'react-router-dom';
import {Card} from "antd";
import styles from './RickAndMortyCard.module.scss';

const { Meta } = Card;

export const RickAndMortyCard: React.FC<{ readonly characterData: RickAndMortyType }> = ({ characterData }) => {
  const { id, image, name, gender, species, status, location } = characterData;
  return (
      <>
          <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={image} />}
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

          {/*Custom Card*/}

        {/*<div className={styles.CharacterCard}>*/}
        {/*  <img src={image} alt={name} />*/}
        {/*  <div>*/}
        {/*    <Link to={`/rick-and-morty/${id}`} className={styles.link}>*/}
        {/*      {name}*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*  <div className={styles.CharacterInfo}>*/}
        {/*    <div>{gender}</div>*/}
        {/*    <div>{species}</div>*/}
        {/*    <div>{status}</div>*/}
        {/*  </div>*/}
        {/*  <div className={styles.CharacterLocation}>Location: {location?.name}</div>*/}
        {/*</div>*/}
      </>
  );
};
