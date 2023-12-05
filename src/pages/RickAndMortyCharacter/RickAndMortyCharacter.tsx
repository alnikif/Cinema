import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { RickAndMortyCard } from '../../components/Cards/RickAndMortyCards/Card/RickAndMortyCard';
import { RickAndMortyType } from '../../types/rickAndMortyTypes';
import styles from './RickAndMortyCharacter.module.scss';

export const RickAndMortyCharacter = () => {
  const [rickAndMortyCharacter, setRickAndMortyCharacter] = useState<RickAndMortyType | null>(null);
  const { characterId } = useParams();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => {
        const { data } = response;
        setRickAndMortyCharacter(data);
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

  if (!rickAndMortyCharacter) {
    return <div>No data</div>;
  }

  return (
    <div className={styles.characterWrapper}>
      <RickAndMortyCard characterData={rickAndMortyCharacter} />
    </div>
  );
};
