import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CellType } from '../../components/Table/CellType';
import { useParams } from 'react-router-dom';
import { inspect } from 'util';
import styles from './RickAndMortyCharacter.module.scss';

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

const headerRickAndMortyRowConfig = [
  { key: 'id', label: 'Id', cellType: CellType.link, width: 1 },
  { key: 'name', label: 'Character name', cellType: CellType.name, width: 3 },
  { key: 'gender', label: 'Gender', cellType: CellType.gender, width: 2 },
  { key: 'image', label: 'Image', cellType: CellType.image, width: 1 },
  { key: 'species', label: 'Species', cellType: CellType.species, width: 2 },
  { key: 'location', label: 'Location', cellType: CellType.location, width: 2 },
  { key: 'status', label: 'Status', cellType: CellType.status, width: 2 },
  { key: 'type', label: 'Type', cellType: CellType.type, width: 2 }
];

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
  const { id, name, gender, image, species, location, status, type } = rickAndMortyCharacter;

  return (
    <div className={styles.CharacterWrapper}>
      <div className={styles.CharacterCard}>
        <img src={image} alt={name} />
        <div>{name}</div>
        <div className={styles.CharacterInfo}>
          <div>{gender}</div>
          <div>{species}</div>
          <div>{status}</div>
        </div>
        <div>Location: {location.name}</div>
      </div>
    </div>
  );
};
