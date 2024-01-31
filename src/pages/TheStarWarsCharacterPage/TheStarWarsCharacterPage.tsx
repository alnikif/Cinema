import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StarWarsType } from '../../types/starWarsTypes';
import { TheStarWarsCharacter } from './TheStarWarsCharacter/TheStarWarsCharacter';
import {getStarWarsCharacter} from "../../api/theStarWars";

export const TheStarWarsCharacterPage = () => {
  const [starWarsCharacter, setStarWarsCharacter] = useState<StarWarsType | null>(null);
  const { characterId } = useParams();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!characterId) return;
    setLoading(true);
    getStarWarsCharacter(characterId)
      .then((response) => {
        setStarWarsCharacter(response);
      })
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

  if (!starWarsCharacter) {
    return <div>No data</div>;
  }

  return (
    <div>
      <TheStarWarsCharacter characterData={starWarsCharacter} />
    </div>
  );
};
