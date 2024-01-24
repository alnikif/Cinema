import React from 'react';
import styles from './StarWarsCard.module.scss';
import { StarWarsType } from '../../../../types/starWarsTypes';
import { Link } from 'react-router-dom';
import {Card} from "antd";

const {Meta} = Card;

export const StarWarsCard: React.FC<{ readonly characterData: StarWarsType }> = ({ characterData }) => {
  const { image, name, gender, species, homeworld, id } = characterData;
  return (
      <>
          <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={image} style={{ height: 300 }} />}
          >
              <Meta title={<Link to={`/star-wars/${id}`} className={styles.link}>
                  {name}
              </Link>} description={gender} />
              <div className={styles.CharacterInfo}>
                  <div className={styles.species}>
                      {species}
                  </div>
                  <div className={styles.homeworld}>
                      {homeworld}
                  </div>
              </div>
          </Card>

          {/*Custom Card*/}

        {/*<div className={styles.CharacterCard}>*/}
        {/*  <img src={image} alt={name} />*/}
        {/*  <div>*/}
        {/*    <Link to={`/star-wars/${id}`} className={styles.link}>*/}
        {/*      {name}*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*  <div className={styles.CharacterInfo}>*/}
        {/*    <div>{gender}</div>*/}
        {/*    <div>{species}</div>*/}
        {/*    <div>{homeworld}</div>*/}
        {/*  </div>*/}
        {/*</div>*/}

      </>
  );
};
