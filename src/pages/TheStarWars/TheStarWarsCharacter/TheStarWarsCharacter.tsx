import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { StarWarsType } from '../../../types/starWarsTypes';
import { StarWarsCard } from '../../../components/Cards/StarWarsCards/Card/StarWarsCard';
import styles from './StarWarsCharacter.module.scss'

export const TheStarWarsCharacter = () => {
  const [starWarsCharacter, setStarWarsCharacter] = useState<StarWarsType | null>(null);
  const { characterId } = useParams();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${characterId}.json`)
      .then((response) => {
        const { data } = response;
        console.log(response)
        setStarWarsCharacter(data);
      })
      .catch((apiError: unknown) => {
        if (apiError instanceof Error) {
          setError(apiError);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!starWarsCharacter) {
    return <div>No data</div>;
  }

  return (
    <div className={styles.characterWrapper}>
      <StarWarsCard characterData={starWarsCharacter} />
    </div>
  );
};
