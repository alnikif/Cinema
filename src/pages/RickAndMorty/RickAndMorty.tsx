import React, { useEffect } from 'react';
import axios from 'axios';

export const RickAndMorty = () => {
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character?page=2`).then((response) => {
      console.log(response);
    });
  }, []);

  return <div>Rick and Morty</div>;
};
