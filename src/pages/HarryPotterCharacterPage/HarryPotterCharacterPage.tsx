import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { HarryPotterType } from '../../types/harryPotterTypes';
import { HarryPotterCharacter } from './HarryPotterCharacter/HarryPotterCharacter';
import {getHarryPotterCharacter} from "../../api/harryPotter";

export const HarryPotterCharacterPage = () => {
  const [harryPotterCharacter, setHarryPotterCharacter] = useState<HarryPotterType[] | null>(null);
  const { characterId } = useParams();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!characterId) return;
    axios
    getHarryPotterCharacter(characterId)
      .then((response) => {
        setHarryPotterCharacter(response);
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

  if (!harryPotterCharacter) {
    return <div>No data</div>;
  }
  return (
    <div>
      <HarryPotterCharacter characterData={harryPotterCharacter} />
    </div>
  );
};
