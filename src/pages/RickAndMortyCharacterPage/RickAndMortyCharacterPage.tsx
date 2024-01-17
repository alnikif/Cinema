import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RickAndMortyCard } from '../../components/Cards/RickAndMortyCards/Card/RickAndMortyCard';
import { RickAndMortyType } from '../../types/rickAndMortyTypes';
import styles from './RickAndMortyCharacterPage.module.scss';
import { getRickAndMortyCharacter } from '../../api/rickAndMorty';

export const RickAndMortyCharacterPage = () => {
  const [rickAndMortyCharacter, setRickAndMortyCharacter] = useState<RickAndMortyType | null>(null);
  const { characterId } = useParams();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!characterId) return;

    setLoading(true);

    getRickAndMortyCharacter(characterId)
        .then(setRickAndMortyCharacter)
        .catch((apiError: unknown) => {
          if (apiError instanceof Error) {
            setError(apiError);
          }
        })
        .finally(() => {
          setLoading(false);
        });
  }, [characterId]);

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