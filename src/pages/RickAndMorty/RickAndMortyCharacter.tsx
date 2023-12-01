import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CellType } from '../../components/Table/CellType';
import { useParams } from 'react-router-dom';
import styles from './RickAndMortyCharacter.module.scss';
import { Card } from '../../components/Cards/Card/Card';

export type RickAndMortyType = {
  id: number;
  name: string;
  gender: string;
  image: string;
  location: { name: string; url: string };
  species: string;
  status: string;
  type: string;
};

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
    <div className={styles.CharacterWrapper}>
      <Card characterData={rickAndMortyCharacter} />
    </div>
  );
};
